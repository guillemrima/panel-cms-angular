const { where } = require('sequelize');
const db = require('../models');
const Avatar = db.Avatar;
const fs = require('fs').promises;
const path = require('path')
const sharp = require('sharp')
const moment = require('moment');

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

  uploadAvatar = async (avatar) => {
    const avatarFile = avatar.file[0];
    const filename = avatarFile.filename.replace(/ |_|-/g, "-");
    const extensionFile = path.extname(filename)
    const fileWithoutExtension = path.basename(filename, extensionFile)

    const originalFilePath = path.resolve(__dirname, '../storage/gallery/original');

    sharp(avatarFile.path)
      .resize(600,600)
      .toFormat('webp')
      .toFile(originalFilePath + "/" + fileWithoutExtension + ".webp", (err, info) => {
        if (err) {
          console.log(err)
        }
      })

      const result = {
        name: fileWithoutExtension
      }

      return result
  }
}
