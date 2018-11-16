/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collectionattributes', {
    collection_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    attribute: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'collectionattributes'
  });
};
