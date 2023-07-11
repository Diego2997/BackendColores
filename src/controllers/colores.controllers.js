import { obtenerColores, obtenerUnColor, postColor,deleteColor } from "../services/colores.services"


export const getColores = async(req,res) =>{
   try {
    const colores =  await obtenerColores()
    res.status(200).json(colores)
   } catch (error) {
    res.status(400).json({mensaje:error.message})
   }
}

export const getUnColor = async(req,res) =>{
   try {
    const {id} = req.params
    const color = await obtenerUnColor(id)
    res.status(200).json(color)
   } catch (error) {
    res.status(404).json({mensaje:error.message})
   }
}

export const crearColor = async (req,res) =>{
    try {
         await postColor(req.body)
        res.status(201).json({mensaje:"Se creo un nuevo color"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const borrarColor = async(req,res) =>{
    try {
        const {id} = req.params
         await deleteColor(id)
        res.status(200).json({mensaje:"Color borrado"})
    } catch (error) {
        res.status(400).json({mensaje:error.message})
    }
}