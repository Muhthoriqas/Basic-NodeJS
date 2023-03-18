const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return `Method ${req.method} not allowed !!!`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return `Method ${req.method} not allowed  !!!`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    method: "GET",
    path: "/users/{username?}",
    handler: (request, h) => {
      const { username = "Thoriq" } = request.params;
      return `Hello ${username}`;
    },
  },
  {
    method: "GET",
    path: "/user/{location?}",
    handler: (request, h) => {
      const { location = "bumi" } = request.params;
      const { city, county } = request.query;

      if (county === "id") {
        if (city === "makassar") {
          return `Hellow ${city}`;
        }
        return `Hai, ${county}!`;
      }
      console.log(location);
      return `Hello, ${location}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return h
        .response(`Welcome ${username}`)
        .code(201)
        .type("text/plain")
        .header("X-Author", "Thoriq");
    },
  },
];

module.exports = routes;
