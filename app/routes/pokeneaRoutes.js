const express = require('express');
const { showInfoJSON, showImageAndPhrase } = require('../controllers/pokeneaController');

const router = express.Router();

router.get('/pokenea', showInfoJSON);
router.get('/pokenea/imagen', showImageAndPhrase);

module.exports = router;
