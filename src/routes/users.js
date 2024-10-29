const express = require('express');
const UserController = require('../controller/users.js');

const router = express.Router();

// create - method post
router.post('/', UserController.createNewUser);

// read - method get
router.get('/', UserController.getAllUsers);

// update - method patch
router.patch('/:id', UserController.updateUser);

// delete - method delete
router.delete('/:id', UserController.deleteUser);

// cari rata2 berdasarkan id
router.get('/:id', UserController.getAvarage);

module.exports = router;
