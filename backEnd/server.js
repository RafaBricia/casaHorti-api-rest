import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

fastify.get('/fruits', async (request, reply) => {
    return {hello: 'world'}
})

const start = async () => {
    try {
        await fastify.listen({port: 4000})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();