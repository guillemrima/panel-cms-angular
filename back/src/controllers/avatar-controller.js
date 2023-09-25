const db = require("./../models");
const Avatar = db.Avatar;
const Op = db.Sequelize.Op;
const AvatarService = require("./../services/avatar-service");

exports.findOne = (req, res) => {

  const id = req.params.id;

  Avatar.findByPk(id)

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

exports.findAll = (req, res) => {
  Avatar.findAll().then( result => {
    res.status(200).send(result)
  })
};

exports.create = async (req, res) => {
  const avatar = req.files
  try{
    const result = await new AvatarService().uploadAvatar(avatar)

    Avatar.create(result).then( async data => {
      res.status(200).send({
        status: 200,
        message: "¡Avatar cargado correctamente!"
      })
    }).catch (error => {
      res.status(500).send({
        message: "No se que pasa"
      })
    })
  }
  catch (error) {
    res.status(500).send({
      message: 'Aqui tampoco se que pasa',
    })
  }
}


