const fastifyPlugin = require("fastify-plugin");

/**
 *
 *  @param {Fastify object} fastify
 * @param {*} options
 *
 *
 */


async function app(fastify, opts) {
  fastify.register(require("fastify-cors"));

  fastify.register(require("./routes/testRoutes"), { prefix: "/test" });
// fastify.register(require("./routes/testRoutes"));
}



module.exports = fastifyPlugin(app);