import { Schema, model } from "mongoose";

const entrenadorSchema = new Schema({
    name: {type: String, required: [true, "Nombre es requerido"]},
    edad: {type: Number, required: [true, "Edad es requerido"]},
    cantidadPokemones: {type: Number}
})

export default model ("Entrenador", entrenadorSchema)