const { where } = require('sequelize');
const db = require('../models');
const Avatar = db.Avatar;

module.exports = class AvatarService {

  getAvatarId = async (avatarName) => {

    const avatarId = await Avatar.findOne({
      where: {
        name: avatarName
      }
    })

    if (avatarId) {
      return avatarId.dataValues.id
    } else {
      return {message: 'No existe un avatar con ese nombre'}
    }
  }
}
