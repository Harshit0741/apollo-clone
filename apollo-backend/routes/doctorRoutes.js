const express = require('express');
const router = express.Router();
const { addDoctor, listDoctors, deleteDoctor } = require('../controllers/doctorController');

router.post('/add-doctor', addDoctor);
router.get('/list-doctor-with-filter', listDoctors);
router.delete('/delete-doctor/:id', deleteDoctor);

module.exports = router;
