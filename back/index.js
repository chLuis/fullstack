import express from 'express';
import { dbConnect } from './src/database/config.js';
import dotenv from 'dotenv'
import router from './src/routes/pokemonRoutes/index.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
    res.send('Soy el res send')
     //console.log(process.env.URL_DB)
 })
// router.get('/get',async (req, res) => {
//     try {
//         const data = await dbConnect()
//         const dataBase = data.db('pokemon')
//         const collection = dataBase.collection('local')
//         const document = await collection.find().toArray()
//         res.status(200).json(document)
//         //console.log(collection)
//         console.log(document)
//     }
//     catch (error) {
//         console.log(error)
//         throw new Error(error);
//     }
// })

app.use('/pokemon', router)


app.listen(8080)

