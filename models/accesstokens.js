/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accesstokens', {
    token: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    sudo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    one_time: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_agent: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'accesstokens'
  });
};
