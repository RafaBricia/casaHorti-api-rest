import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #fruits = new Map();

    list() {
        return this.#fruits.values();
    }

    create(fruit){
        const videoId = randomUUID();

        this.#fruits.set(videoId, fruit)
    }

    update(id, fruit){
        this.#fruits.set(id, fruit)
    }

    delete(id, fruit){
        this.#fruits.delete(id, fruit)
    }
}