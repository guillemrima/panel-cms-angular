const db = require("./../models");
const User = db.User;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

  User.findAll()
  .then(result => {
    res.status(200).send(result)
  })
};
