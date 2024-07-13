async function testRoute(fastify, options){
    fastify.get('/ping', async (req, res) => {
        return res.send({data: 'pong' })
    })
}



module.exports = testRoute;