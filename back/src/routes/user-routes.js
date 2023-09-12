const { QueryError } = require("sequelize");

module.exports = (app) => {

    const router = require("express").Router();
    // const authJwt  = require("../middlewares/auth-jwt.js");
    const controller = require("../controllers/user-controller.js");
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Authorization, Origin, Content-Type, Accept"
        );
        next();
    });

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", );
    router.put("/:id",);
    router.delete("/:id",);

    app.use('/users', router);
  };
