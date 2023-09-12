const db = require("./../models");
const User = db.User;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

  User.findAll()
  .then(result => {
    res.status(200).send(result)
  })
};

exports.create = (req, res) => {
  console.log(req.body.formData)
  User.create(req.body.formData).then(async data => {
    res.status(200).send(data);
  }).catch(async err => {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido a la hora de crear el usuario'
    })
  })
}
