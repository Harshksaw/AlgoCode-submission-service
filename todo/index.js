const fastify = require("fastify")({ logger: true }); // Create a new Fastify instance

fastify.addHook("onReady", (done) => {
  console.log("App is ready");
  done();
});
const port = process.env.PORT || 3000;

async function start() {
  try {
    await fastify.listen(port);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}



start();

function samplePlugin(fastify, opts, done) {
    console.log("excuting my plugin");
    fastify.decorate("key", "value"); //atach own keyvalue apirs to fastify instance
    console.log(fastify);
    done();
  }
  
  fastify.register(samplePlugin, { message: "hello" });

fastify.route({
  url: "/route",
  method: "GET",
  handler: async (request, reply) => {
    return { hello: "world" };
  },
});

