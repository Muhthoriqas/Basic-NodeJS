const http = require("http");
const { chunk } = require("lodash");

const requireListener = (request, response) => {
  //! Respon Header
  response.setHeader("Content-Type", "application/json");
  // response.setHeader("X-Powered-By", "NodeJS");

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
      //! Respon Status
      response.statusCode = 200;

      //!  Respon Body
      response.end(
        JSON.stringify({
          message: "Hello",
        })
      );
    } else {
      response.statusCode = 405;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan "${method}" request`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Hello  ini /about",
        })
      );
    } else if (method === "POST") {
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name, umur } = JSON.parse(body);
        response.statusCode = 200;

        response.end(
          JSON.stringify({
            message: `Halo, ${name}! umur ${umur} Ini adalah halaman about`,
          })
        );
        // response.end(`Hello ${name}, ${umur}`);
      });
    } else {
      response.statusCode = 405;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan "${method}" request`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    const message = {
      message: "Halaman tidak ditemukan",
    };
    response.end(JSON.stringify(message));
  }
};

const server = http.createServer(requireListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, (name) => {
  name = "Thoriq";
  console.log(`Server ${name} berjalan  di http://${host}:${port}`);
});
