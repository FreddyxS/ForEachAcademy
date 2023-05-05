const express = require('express');
const controller = require('../controllers/excuses');
const router = express.Router();

router.get('/',controller.listExcuse); // les requêtes GET ou POST utiliserons leur controller associé
router.post('/',controller.ajoutExcuse);

module.exports = router;