const fastify = require("fastify")({ logger: true });

fastify.get("/", async (req, res) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (error) {
        fastify.log(error);
        process.exit(1);
    }
};

start();