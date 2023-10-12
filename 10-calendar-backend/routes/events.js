/*
    Rutas de Eventos 
    /api/events
*/

const express = require('express');
const { check } = require('express-validator')
const { getEventos, actualizarEvento, crearEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isdate');

check

const router = express.Router();


/// Todas deben pasar por la validacion del JWT
router.use( validarJWT );

// Optener eventos 
router.get('/', 

    getEventos)



// Crear nuevo evento
router.post('/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento)


// Actualizar evento
router.put('/:id', 
    
    actualizarEvento)

// Borrar evento
router.delete('/:id', 

    eliminarEvento)


module.exports = router;
