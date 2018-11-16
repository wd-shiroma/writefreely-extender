/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let collections = sequelize.define('collections', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    alias: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(160),
      allowNull: false
    },
    style_sheet: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    script: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    format: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    privacy: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    view_count: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'collections'
  });

  return collections;
};
