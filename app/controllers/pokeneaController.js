const pokeneas = require('../data/pokeneas');
const path = require('path');
const os = require('os');


const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

const showImageAndPhrase = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/pokeneas/show.html'));
};

const showInfoJSON = (req, res) => {
    const pokenea = getRandomPokenea();
    res.json({
        id: pokenea.id,
        name: pokenea.name,
        image: pokenea.image,
        phrase: pokenea.phrase,
        container_id: os.hostname()
    });
};

module.exports = { showInfoJSON, showImageAndPhrase};
