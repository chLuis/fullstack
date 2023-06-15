import { Schema, model } from "mongoose";

const skillSchema = new Schema({
    _id: {type: String, required: [true, "Id skill es requerido"]},
    name: {type: String, required: [true, "Nombre skill es requerido"]},
    type: {type: String, required: [true, "Type skill es requerido"]},
    description: {type: String, required: [true, "Descripcion skill es requerido"]},
})

export default model('Skill', skillSchema);