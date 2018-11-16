/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collectionredirects', {
    prev_alias: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    new_alias: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'collectionredirects'
  });
};
