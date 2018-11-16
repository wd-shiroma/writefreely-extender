/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remoteuserkeys', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    remote_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    public_key: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'remoteuserkeys'
  });
};
