import express from "express";
import { createPokemon } from '../../controllers/pokemonControllers/index.js'

const router = express.Router()

router.post('/create', createPokemon)
//router.get('/get', getPokemon)

export default router