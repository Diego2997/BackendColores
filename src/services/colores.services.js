import Color from '../models/Color'

export const obtenerColores = async()=>{
    const colores = await Color.find()
    if(!colores){
    return {mensaje:"ocurrio un error",status:400}
    }
    return colores
}


export const obtenerUnColor = async(id) =>{
    try {
        const color = await Color.findById(id)
        return color
    } catch (error) {
        throw new Error("No se encontro el color")
    }
}

export const postColor = async(body) =>{
    try {
    const nuevoColor = new Color(body)
    return await nuevoColor.save()
    } catch (error) {
        throw new Error("Ocurrio un error al crear el color")
    }
}

export const deleteColor = async(id) =>{
    try {
         await Color.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("No se pudo eliminar el color")  
    }
}