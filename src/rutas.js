import { Router } from "express";
import { getRespuesta } from "./bot.js";
const router = Router();

router.get('/mensaje', (req, res) => {
    let mensaje = req.query.texto;
    let respuesta = getRespuesta(mensaje);
    res.json({mensaje: respuesta});
});


export default router;