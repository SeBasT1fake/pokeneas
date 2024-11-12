const pokeneas = require('../data/pokeneas');
const path = require('path');
const os = require('os');

const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

const showInfoJSON = (req, res) => {
    const pokenea = getRandomPokenea();
    res.json({
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
        container_id: process.env.CONTAINER_ID || 'local'
    });
};

const showImageAndPhrase = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/pokeneas/show.html'));
};

const getPokeneaData = (req, res) => {
    const containerName = os.hostname();
    
    const data = {
        imagen: 'ruta_de_tu_imagen',
        frase: 'Frase aleatoria del pokenea',
        containerName: containerName
    };
    
    res.json(data);
};

module.exports = { showInfoJSON, showImageAndPhrase, getPokeneaData };
