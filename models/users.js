/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    email: {
      type: "VARBINARY(255)",
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false,
    tableName: 'users'
  })

  return users;
};
