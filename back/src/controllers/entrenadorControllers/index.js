import Entrenador from '../../models/entrenador.js'
import { dbConnect } from '../../database/config.js'

export const createEntrenador = async (req, res) => {

        try{
            const {name,edad,cantidadPokemones} = req.body
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
        console.log(data)
        //console.log(collection)
     }
     catch (error) {
        console.log(error)
        throw new Error(error);
     }
 }

