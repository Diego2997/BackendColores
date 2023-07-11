import mongoose, { mongo } from "mongoose";
import { MONGO_URI } from "../config";

mongoose.connect(MONGO_URI,{family:4})
.then(()=>{console.log("Base de datos conectada en " + mongoose.connection.name)})
.catch(() => console.log("Ocurrio un error al conectarse a la base de datos"))