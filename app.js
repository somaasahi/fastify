import Fastify from "fastify";
const fastify = Fastify();
// import Route from "./test/route.js";
// import { dirname, join } from "path";
// import { fileURLToPath } from "url";
// import AutoLoad from "fastify-autoload";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// fastify.register(AutoLoad, {
//     dir: join(__dirname, "routes")
// });

// fastify.register(Route);

fastify.get("/", async function (request, reply) {
    return "hello world";
});


fastify.listen(3000);