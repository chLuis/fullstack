import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
    name: {type: String, required: [true, "Nombre es requerido"]},
    skill: {type: String, required: [true, "Skill es requerido"]}
})

export default model ("Pokemon", pokemonSchema)