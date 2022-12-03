// /api/auth/

const authRouter = require("express");
const authController = require("./../controllers/authController/js");
const hashPass = require('../middlewares/hashPassMiddle');
const validators = require('../middlewares/validators');

authRouter.post(
    '/registration',
    validators.validateRegistrationData,
    hashPass,
    authController.registration,
  );
  
authRouter.post(
    '/login',
    validators.validateLogin,
    authController.login,
  );

module.exports = authRouter;