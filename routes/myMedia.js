var express = require('express');
var router = express.Router();
const mediaController = require('../controllers/myMedia');


//GET : login page
router.get('/', mediaController.getMyMedia);

module.exports = router;
