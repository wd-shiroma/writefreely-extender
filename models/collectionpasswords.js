/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collectionpasswords', {
    collection_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false
    }
  }, {
    tableName: 'collectionpasswords'
  });
};
