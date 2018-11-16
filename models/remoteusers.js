/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remoteusers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    actor_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    inbox: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shared_inbox: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'remoteusers'
  });
};
