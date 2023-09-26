const db = require("./../models");
const path = require('path')
const Avatar = db.Avatar;
const Op = db.Sequelize.Op;
const AvatarService = require("./../services/avatar-service");

exports.findOne = (req, res) => {

  const filename = req.params.filename + ".webp";

  const options = {
    root: __dirname + '../../storage/gallery/original/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(filename, options)
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
        message: errors
      })
    })
  }
  catch (error) {
    res.status(500).send({
      message: error
    })
  }
}


