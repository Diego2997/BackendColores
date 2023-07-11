import { Router } from "express";
import { borrarColor, crearColor, getColores, getUnColor } from "../controllers/colores.controllers";


const router = Router()

router.get('/colores',getColores)
router.get('/colores/:id',getUnColor)
router.post('/colores',crearColor)
router.put('/colores/:id')
router.delete('/colores/:id',borrarColor)

export default router