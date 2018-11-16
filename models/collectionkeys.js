/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collectionkeys', {
    collection_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    public_key: {
      type: "BLOB",
      allowNull: false
    },
    private_key: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'collectionkeys'
  });
};
