import Skill from '../../models/skill.js'
import { dbConnect } from '../../database/config.js'
import mongoose from 'mongoose'

function generarIdAlfanumerico() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const longitud = 10;
    let id = '';
  
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indice);
    }
  
    return id;
  }

export const createSkills = async (req, res) => {
    try {
        const _id = generarIdAlfanumerico()
        const {name, type, description } = req.body
        const skill = new Skill({_id, name, type, description})
        await skill.save()
        res.status(200).send('Skill creado')
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

export const getSkills = async (req, res) => {
    try {
        const data = await dbConnect()
        const collection = data.connection.collection('skills')
        const document = await collection.find().toArray()
        res.status(200).json(document)
    }
    catch (error) {
        res.status(400).send(error.message)
    }

}

export const deleteSkills = async (req, res) => {
  try{
    const {id} = req.params
    await Skill.findByIdAndDelete(id)
    const {name} = req.body
    res.status(200).send(`Skill eliminado -> ${name}`)
    //res.status(200).send()
    //res.status(200).send(body)
  
  }
  catch (error) {
    res.status(400).send(error.message)
}}

export const updateSkills = async (req, res) => {
  try{
    const {id} = req.params
    const {name, type, description} = req.body
    await Skill.findByIdAndUpdate(id, {name, type, description})
    res.status(200).send('Skill actualizado')
  }
  catch (error) {
    res.status(400).send(error.message)
}}