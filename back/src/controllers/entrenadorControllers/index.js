import Entrenador from '../../models/entrenador.js'
import { dbConnect } from '../../database/config.js'
import mongoose from 'mongoose'

export const createEntrenador = async (req, res) => {

        try{
            const { name, edad, cantidadPokemones } = req.body
            const entrenador = new Entrenador({name, edad, cantidadPokemones})
            await entrenador.save();
            res.status(200).send('Entrenador creado')
        }
        catch(error){
            res.status(400).send(error.message)
        }
    //console.log(req)
}

export const getEntrenador = async (req, res) => {
     try {
        const data = await dbConnect()
        const collection = data.connection.collection('entrenadors')
        const document = await collection.find().toArray()
        res.status(200).json(document)
        //console.log(data.connection.collection)
        //console.log(data)
        //console.log(document)
     }
     catch (error) {
        res.status(400).send(error.message)
     }
 }
export const updateEntrenador = async (req, res) =>  {

    try{
        const entrenadorName = req.query.name
        const newDataEntrenador = req.body
        console.log(entrenadorName)
        const collection = mongoose.connection.collection('entrenadors')
        await collection.findOneAndUpdate({name: entrenadorName}, {$set:newDataEntrenador})
        res.status(200).send("update")

    }
    catch (error) {
        res.status(400).send(error.message)
     }
}
