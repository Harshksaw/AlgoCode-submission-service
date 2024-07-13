const app = require('./app')

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

fastify.register(app)
// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'pong' })
})
// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
