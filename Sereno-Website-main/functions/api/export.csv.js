export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const qr = (url.searchParams.get("qr") || "").toLowerCase();

    // Prefer D1 if bound and has data
    if (env.DB) {
      const where = qr === "leh" ? "WHERE qr = 'leh'" : "";
      const rows = await env.DB.prepare(
        `SELECT created_at, name, whatsapp, email, instagram,
                CASE followed WHEN 1 THEN 'Yes' ELSE 'No' END AS followed,
                COALESCE(qr,'') AS qr, COALESCE(utm_source,'') AS utm_source,
                COALESCE(utm_campaign,'') AS utm_campaign, COALESCE(ip,'') AS ip
         FROM submissions
         ${where}
         ORDER BY created_at DESC`
      ).all();

      return csvResponse(rows.results || [], qr === "leh");
    }

    // Fallback to KV (use the SAME binding that submit.js writes to)
    if (env.LEADS) {
      const list = await env.LEADS.list({ limit: 10000 });
      const items = [];
      // newest first (keys are "lead:<timestamp>")
      const keys = [...(list.keys || [])].sort((a,b)=> b.name.localeCompare(a.name));
      for (const k of keys) {
        const raw = await env.LEADS.get(k.name);
        if (!raw) continue;
        const r = safeJSON(raw);

        if (qr === "leh" && (String(r.qr || "") !== "leh")) continue;

        const followedYes =
          r.followed === true ||
          r.followed === 1 ||
          r.followed === "1" ||
          String(r.followed).toLowerCase() === "yes";

        items.push({
          created_at: r.created_at || new Date(r.ts || Date.now()).toISOString(),
          name: r.name || "",
          whatsapp: r.whatsapp || "",
          email: r.email || "",
          instagram: r.instagram || "",
          followed: followedYes ? "Yes" : "No",
          qr: r.qr || "",
          utm_source: r.utm_source || "",
          utm_campaign: r.utm_campaign || "",
          ip: r.ip || ""
        });
      }
      return csvResponse(items, qr === "leh");
    }

    return json({ ok:false, error:"No storage bound. Bind D1 as 'DB' or KV as 'LEADS'." }, 500);
  } catch (e) {
    return json({ ok:false, error:String(e) }, 500);
  }
}

function csvResponse(rows, lehOnly){
  const header = ["Timestamp","Name","WhatsApp","Email","Instagram","FollowedIG","QR","UTM_Source","UTM_Campaign","IP"];
  const csv = [header.join(",")]
    .concat(rows.map(r => [r.created_at,r.name,r.whatsapp,r.email,r.instagram,r.followed,r.qr,r.utm_source,r.utm_campaign,r.ip]
      .map(csvField).join(",")))
    .join("\n");
  const fname = lehOnly ? "leh.submissions.csv" : "submissions.csv";
  return new Response(csv, {
    headers:{
      "Content-Type":"text/csv; charset=utf-8",
      "Content-Disposition":`attachment; filename="${fname}"`,
      "Access-Control-Allow-Origin":"*"
    }
  });
}

function csvField(s){ s = s == null ? "" : String(s); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; }
function json(obj, status=200){ return new Response(JSON.stringify(obj), { status, headers:{ "Content-Type":"application/json", "Access-Control-Allow-Origin":"*" }}); }
function safeJSON(s){ try { return JSON.parse(s); } catch { return {}; } }
