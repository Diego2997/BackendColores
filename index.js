import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import './src/database/dbConnection'
import 'dotenv/config'
import coloresRouter from './src/routes/colores.routes'


const app = express()

app.set('port',process.env.PORT || 4000)
app.listen(app.get('port'),()=>{
    console.log("Servidor corriendo en el puerto " + app.get('port'))
})


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))

app.use('/api',coloresRouter)