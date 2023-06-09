import express from "express";
import { createEntrenador, getEntrenador } from '../../controllers/entrenadorControllers/index.js'

const router = express.Router()

router.post('/create', createEntrenador)
router.get('/get', getEntrenador)

export default router