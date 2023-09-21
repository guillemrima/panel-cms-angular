const db = require("./../models");
const Avatar = db.Avatar;
const Op = db.Sequelize.Op;


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
