import express from "express";
import { createEntrenador, getEntrenador, updateEntrenador } from '../../controllers/entrenadorControllers/index.js'
import { validador } from '../../autorizacion/index.js'

const router = express.Router()

router.post('/create', validador, createEntrenador)
router.get('/get/:id', getEntrenador)
router.put('/update', updateEntrenador)

export default router