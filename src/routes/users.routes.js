const express = require('express');
const userController = require('./../controllers/users.controllers');

const router = express.Router();

//TODO: DEFINIR ENDPOIND

router
  .route('/')
  .get(userController.findAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.findOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);



module.exports = router;
