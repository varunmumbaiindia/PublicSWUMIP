export async function onRequestGet({ env }) {
  return new Response(JSON.stringify({
    ok: true,
    hasDB: !!env.DB,
    hasKV_LEADS: !!env.LEADS,      // your KV binding used by submit.js
    hasKV_SUBMISSIONS: !!env.SUBMISSIONS // legacy name (if you ever used it)
  }), { headers: { "Content-Type": "application/json" }});
}
