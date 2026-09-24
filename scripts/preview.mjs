import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};
http
  .createServer(async (req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405);
      res.end();
      return;
    }
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      let file = path.resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let info = await stat(file).catch(() => null);
      if (info?.isDirectory()) file = path.join(file, "index.html");
      let body = await readFile(file).catch(() => null);
      const status = body ? 200 : 404;
      if (!body) {
        file = path.join(root, "404.html");
        body = await readFile(file);
      }
      res.writeHead(status, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(req.method === "HEAD" ? undefined : body);
    } catch {
      res.writeHead(400);
      res.end("Unable to serve this request. Run npm run build first.");
    }
  })
  .listen(Number(process.env.PORT || 3100), "127.0.0.1", () =>
    console.log(
      `Static preview: http://localhost:${process.env.PORT || 3100}/en/`,
    ),
  );
