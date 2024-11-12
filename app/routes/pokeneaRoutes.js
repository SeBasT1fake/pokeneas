const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/pokeneaImage', pokeneaController.showImageAndPhrase);
router.get('/pokenea', pokeneaController.showInfoJSON);

module.exports = router;
