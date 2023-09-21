module.exports = function (sequelize, DataTypes) {
  const Avatar = sequelize.define('Avatar', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'avatars',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }]
      },
      {
        name: 'name',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'name' }]
      }
    ]
  });

  Avatar.associate = function (models) {
    // Definir la asociación con el modelo User
    Avatar.hasMany(models.User, { foreignKey: 'avatarId' });
  };

  return Avatar;
};
