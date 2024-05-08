import { log } from "node:console";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>CIAO</h1></body></html>");
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
