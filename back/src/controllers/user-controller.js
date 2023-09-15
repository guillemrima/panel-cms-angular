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
  User.create(req.body).then(async data => {
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

exports.findOne = (req, res) => {

  const id = req.params.id;

  User.findByPk(id)

  .then(data => {

      if (data) {
          res.status(200).send(data);
      } else {
          res.status(404).send({
              message: `No se puede encontrar el elemento con la id=${id}.`
          });
      }

  }).catch(err => {
      res.status(500).send({
          message: "Algún error ha surgido al recuperar la id=" + id
      });
  })
};

exports.Update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
      where: { id: id }
  }).then(num => {
      if (num == 1) {
          res.status(200).send({
              message: "El elemento ha sido actualizado correctamente."
          });
      } else {
          res.status(404).send({
              message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
          });
      }
  }).catch(err => {
      res.status(500).send({
          message: "Algún error ha surgido al actualiazar la id=" + id
      });
  })
}

