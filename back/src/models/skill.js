import { Schema, model } from "mongoose";

const skillSchema = new Schema({
    _id: {type: String, require: [true, "Id skill es requerido"]},
    name: {type: String, require: [true, "Nombre skill es requerido"]},
    type: {type: String, require: [true, "Type skill es requerido"]},
    description: {type: String, require: [true, "Descripcion skill es requerido"]},
})

export default model('Skill', skillSchema);