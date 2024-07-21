const fastify = require('fastify')({ logger: true });// Create a new Fastify instance


fastify.addHook('onReady', (done) => {
    console.log('App is ready');
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