const hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);
  await server.start();
  console.log(`Server belajan di ${server.info.uri}`);
};

init();
