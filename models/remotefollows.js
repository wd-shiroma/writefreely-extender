/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remotefollows', {
    collection_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    remote_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'remotefollows'
  });
};
