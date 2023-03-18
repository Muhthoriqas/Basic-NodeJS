const http = require("http");
const { chunk } = require("lodash");

const requireListener = (request, response) => {
  response.setHeader = ("Content-Type", "text/html");
  let { statusCode } = response;

  //! Method/Verb Request
  const { method } = request;
  const { url } = request;

  //! Body Request
  let body = [];

  request.on("data", (chuck) => {
    body.push(chuck);
  });

  if (url === "/") {
    if (method === "GET") {
      response.end("Hello");
      console.log(statusCode);
    } else {
      response.end(`Halaman tidak dapat diakses dengan "${method}" request`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("Hello ini /about");
    } else if (method === "POST") {
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name, umur } = JSON.parse(body);
        response.end(`Halo,  ${name} umur ${umur}! Ini adalah halaman about`);
      });
    }
  } else {
    response.end("Halaman tidak ditemukan");
  }
};

const server = http.createServer(requireListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, (name) => {
  name = "Thoriq";
  console.log(`Server ${name} berjalan  di http://${host}:${port}`);
});
