export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    const followedRaw = formData.get("followed");
    const followed =
      followedRaw === true ||
      followedRaw === "on" ||
      followedRaw === "true" ||
      followedRaw === "1";

    const entry = {
      ts: Date.now(),
      created_at: new Date().toISOString(),
      name: (formData.get("name") || "").trim(),
      whatsapp: (formData.get("whatsapp") || "").trim(),
      email: (formData.get("email") || "").trim(),
      instagram: (formData.get("instagram") || "").trim(),
      followed, // boolean
      qr: (formData.get("qr") || "").toLowerCase(),
      utm_source: formData.get("utm_source") || "",
      utm_campaign: formData.get("utm_campaign") || "",
      ip: context.request.headers.get("cf-connecting-ip") || ""
    };

    if (!entry.name || !entry.whatsapp || !entry.email || !entry.instagram) {
      return new Response(JSON.stringify({ ok:false, error:"missing_fields" }), {
        status: 400, headers: { "Content-Type":"application/json" }
      });
    }

    // Save to KV (binding name must be LEADS)
    await context.env.LEADS.put(`lead:${entry.ts}`, JSON.stringify(entry));

    return new Response(JSON.stringify({ ok:true }), { headers:{ "Content-Type":"application/json" }});
  } catch (err) {
    return new Response(JSON.stringify({ ok:false, error: String(err?.message || err) }), {
      status: 500, headers: { "Content-Type":"application/json" }
    });
  }
}
