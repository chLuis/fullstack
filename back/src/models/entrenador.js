import { Schema, model } from "mongoose";

const entrenadorSchema = new Schema({
    _id: {type: String, default: "my_custom_id", auto: false},
    name: {type: String, required: [true, "Nombre es requerido"]},
    edad: {type: Number, required: [true, "Edad es requerido"]},
    password: {type: String, required: [true, "Contraseña es requerida"]},
})

export default model ("Entrenador", entrenadorSchema)