const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');
const pokeneaController = require('../controllers/pokeneaController');

router.get('/pokenea/image', pokeneaController.showImageAndPhrase);
router.get('/pokenea', pokeneaController.showInfoJSON);

module.exports = router;
