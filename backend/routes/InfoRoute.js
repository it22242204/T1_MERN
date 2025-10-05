const express =require('express');
const router = express.Router(); // express router for routing

const {createInfo , getAllInfo, getSingleInfo, updateInfo, deleteInfo} = require('../controller/InfoController');

router.post('/create', createInfo);
router.get('/get-all', getAllInfo);
router.get('/get-single/:id', getSingleInfo);
router.put('/update/:id', updateInfo);
router.delete('/delete/:id', deleteInfo);

module.exports = router;