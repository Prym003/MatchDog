const { Breed } = require('../../src/models/index');

it('debe traer los datos requeridos', (done) => {
    Breed.create({})
    .then(() => done(new Error('Requiere todos los datos para ser creado')))
    .catch(() => done());
});