const { QueryError } = require("sequelize");

module.exports = (app) => {

    const router = require("express").Router();
    // const authJwt  = require("../middlewares/auth-jwt.js");
    const controller = require("../controllers/avatar-controller.js");
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Authorization, Origin, Content-Type, Accept"
        );
        next();
    });

    router.get("/:id", controller.findOne);

    app.use('/avatars', router);
  };
