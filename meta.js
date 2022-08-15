import Fastify from "fastify";
const fastify = Fastify();
import faker from "faker";
faker.locale = "ja";
// import validate from "./validation.js";

fastify.get("/:realm/:shortKd/:index/:lang", async function (request, reply) {

    const { realm, shortKd, index, lang } = request.params;
    var error = "";

    if (realm === "") {
        error = "realm is required";
        reply.code(400).send(error);
    }
    if (shortKd === "") {
        error = "shortKd is required";
        reply.code(400).send(error);
    }
    if (index === "") {
        error = "index is required";
        reply.code(400).send(error);
    }
    if (isNaN(index)) {
        error = "index is not a number";
        reply.code(400).send(error);
    }
    if (index < 1 || index > 9) {
        error = "index is not 1-9";
        reply.code(400).send(error);
    }
    if (lang === "") {
        error = "lang is required";
        reply.code(400).send(error);
    }
    

    faker.seed(Number(index));
    const item = {
        name : faker.commerce.productName(),
        description : faker.lorem.sentence(),
        image : faker.image.imageUrl(),
        external_url : faker.internet.url(),
        category : faker.random.arrayElement(["monster", "hero", "card"]),
        attribute : {
            display_type : faker.random.arrayElement(["text", "image", "video"]),
            trait_type : faker.datatype.number(4),
            value : faker.datatype.number(50),
            class : faker.commerce.color()
        },
        localization : {
            uri : faker.internet.url(),
            default : "ja",
            locales : ["ja","en","de","fr"]
        }
        
    };
    reply.code(200).send(item);
});


fastify.listen(3000);