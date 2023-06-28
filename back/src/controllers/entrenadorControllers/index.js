import Entrenador from '../../models/entrenador.js'
import { dbConnect } from '../../database/config.js'
import mongoose from 'mongoose'
import { genSaltSync, hashSync, compareSync } from 'bcrypt'

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

export const createEntrenador = async (req, res) => {

        try{
            const salt = genSaltSync(1)
            console.log(salt)

            const _id = generarIdAlfanumerico()
            const { name, edad, password } = req.body
            const passwordHash = hashSync(password, salt)
            console.log(passwordHash)
            const entrenador = new Entrenador({_id, name, edad, password: passwordHash})
            await entrenador.save();
            res.status(200).send('Entrenador creado')
        }
        catch(error){
            res.status(400).send(error.message)
        }
}

export const getEntrenador = async (req, res) => {
    try {
        const idEntrenador = req.params.id
        const {name, password} = req.body
        const {name: nombre, password: contrasenia} = await Entrenador.findById(idEntrenador)

        const passValidacion = compareSync(password, contrasenia)

        name === nombre && passValidacion ? res.status(200).json(nombre) : res.status(400).send('Error')
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
