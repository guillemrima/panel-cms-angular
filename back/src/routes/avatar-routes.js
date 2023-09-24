const { QueryError } = require("sequelize");

module.exports = (app, upload) => {

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

    const uploadFields = upload.fields([
      {name: 'file', maxCount: 1}
    ])

    router.get("/:id", controller.findOne);
    router.get("/", controller.findAll);
    router.post("/", [uploadFields] ,controller.create);

    app.use('/avatars', router);
  };
