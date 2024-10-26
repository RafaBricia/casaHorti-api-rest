import Fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const fastify = Fastify({
    logger: true
})


const database = new DatabaseMemory();


fastify.post('/fruits', (request, reply) => {
    database.create({
        nome: "Uva",
        desc: "Cacho de uva",
        preco: 2.5
    })

    console.log(database.list());

    return reply.status(201).send();
})

fastify.get('/fruits', (request, reply) => {
    return database.list();
})


fastify.put('/fruits/:id', () => {
    return 'Put method'
})

fastify.delete('/fruits/:id', () => {
    return 'Delete method'
})


fastify.listen({ port: 4000 }, (err) => {
    if (err) throw err
})