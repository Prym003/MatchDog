const { Router } = require('express');
// const { route } = require('../app');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const BreedRoutes = require('./Breeds')
const TemperamentRoutes = require('./Temperament')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', BreedRoutes)
router.use('/temperament', TemperamentRoutes)

module.exports = router;
