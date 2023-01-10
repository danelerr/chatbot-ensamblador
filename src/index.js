
//aplicacion
import express from 'express';
import { PORT } from './config.js';
import rutas from './rutas.js';
//borrar
import cors from 'cors';


const app = express();

app.use(express.static('src/public'));
app.use(express.json());
app.use(rutas);
app.use(cors);


app.listen(PORT);

console.log('aplicacion ejecutandose en el puerto ' + PORT);