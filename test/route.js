/**
 * 
 * @param {import('fastify').FAstifyInstance} fastify
 * @param {*} opts
 */

export default async function (fastify, opts) {
    fastify.get("/soma", async function (request, reply) {
        reply.code(200).send("Got to Soma route");
    });
}