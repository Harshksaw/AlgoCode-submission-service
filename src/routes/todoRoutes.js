async function todoRoutes(fastify, options) {
    fastify.get('/', async (req, res) => {
        return res.send({data:["todo"]});

    })
}

module.exports = todoRoutes;