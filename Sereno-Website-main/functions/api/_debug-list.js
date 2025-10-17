// /functions/api/_debug-list.js
// View recent submissions without opening the dashboard.
// Usage:
//   - GET /api/_debug-list                (latest 10 from all sources)
//   - GET /api/_debug-list?limit=50
//   - GET /api/_debug-list?qr=leh         (filter by Leh)
//   - GET /api/_debug-list?storage=kv     (force KV) or storage=d1

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const limit = clamp(parseInt(url.searchParams.get("limit") || "10", 10), 1, 1000);
  const filterQr = (url.searchParams.get("qr") || "").toLowerCase();
  const force = (url.searchParams.get("storage") || "").toLowerCase(); // "kv" | "d1" | ""

  // Prefer explicit selection, else auto-detect
  const useD1 = (force === "d1") || (force === "" && !!env.DB);
  const useKV = (force === "kv") || (!useD1 && !!env.LEADS);

  try {
    if (useD1) {
      // D1 path
      const where = filterQr === "leh" ? "WHERE qr = 'leh'" : "";
      const rows = await env.DB.prepare(
        `SELECT created_at, name, whatsapp, email, instagram,
                CASE followed WHEN 1 THEN 'Yes' ELSE 'No' END AS followed,
                COALESCE(qr,'') AS qr, COALESCE(utm_source,'') AS utm_source,
                COALESCE(utm_campaign,'') AS utm_campaign, COALESCE(ip,'') AS ip
         FROM submissions
         ${where}
         ORDER BY created_at DESC
         LIMIT ?`
      ).bind(limit).all();

      const count = await env.DB.prepare(
        `SELECT COUNT(*) AS c FROM submissions ${where}`
      ).all();

      return json({
        ok: true,
        storage: "d1",
        total: count.results?.[0]?.c ?? 0,
        showing: rows.results?.length ?? 0,
        items: rows.results ?? []
      });
    }

    if (useKV) {
      // KV path
      // KV doesn't support server-side filtering or ordering; we sort by key and filter client-side.
      const list = await env.LEADS.list({ limit: 10000 });
      // Most recent keys last by default; sort descending by name to get latest first (since we stored with ts in key)
      const keys = [...(list.keys || [])].sort((a, b) => b.name.localeCompare(a.name));
      const items = [];
      for (const k of keys) {
        if (items.length >= limit) break;
        const raw = await env.LEADS.get(k.name);
        if (!raw) continue;
        const r = safeJSON(raw);
        if (filterQr && (String(r.qr || "") !== filterQr)) continue;
        items.push({
          created_at: r.created_at || new Date(r.ts || Date.now()).toISOString(),
          name: r.name || "",
          whatsapp: r.whatsapp || "",
          email: r.email || "",
          instagram: r.instagram || "",
          followed: r.followed ? "Yes" : "No",
          qr: r.qr || "",
          utm_source: r.utm_source || "",
          utm_campaign: r.utm_campaign || "",
          ip: r.ip || ""
        });
      }
      return json({
        ok: true,
        storage: "kv",
        total: (list.keys || []).length,
        showing: items.length,
        items
      });
    }

    return json({ ok: false, error: "No storage bound. Add D1 binding 'DB' or KV binding 'LEADS' in Pages → Settings → Functions." }, 500);
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function clamp(n, min, max){ return Math.max(min, Math.min(max, isNaN(n) ? min : n)); }
function safeJSON(s){ try { return JSON.parse(s); } catch { return {}; } }
