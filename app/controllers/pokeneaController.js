const pokeneas = require('../data/pokeneas');

const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

const showInfoJSON = (req, res) => {
    const pokenea = getRandomPokenea();
    res.json({
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        habilidad: pokenea.habilidad,
        contenedor_id: process.env.CONTAINER_ID || 'local'
    });
};

const showImageAndPhrase = (req, res) => {
    const pokenea = getRandomPokenea();
    res.send(`
        <div style="text-align:center">
            <img src="${pokenea.imagen}" alt="${pokenea.nombre}" width="300">
            <p>${pokenea.frase}</p>
            <p>Contenedor ID: ${process.env.CONTAINER_ID || 'local'}</p>
        </div>
    `);
};

module.exports = { showInfoJSON, showImageAndPhrase };
