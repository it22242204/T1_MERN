const express =require('express');
const router = express.Router();

const CreateInfo = require('../controller/InfoController');

router.post('/createinfo', CreateInfo);

module.exports = router;