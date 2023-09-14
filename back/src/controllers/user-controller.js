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

  User.create(req.body.formData).then(async data => {
    res.status(200).send(data);
  }).catch(async err => {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido a la hora de crear el usuario'
    })
  })
}

exports.delete = (req, res) => {
  console.log(`Eliminando usuario con id ${req.params.id}...`)

  User.destroy({
    where: {id: req.params.id}
  }).then (() => {
    res.status(200).send()
  })
}


