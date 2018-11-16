/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    modify_token: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    text_appearance: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: 'norm'
    },
    language: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    rtl: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    privacy: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    collection_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    pinned_position: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    view_count: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(160),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
    tableName: 'posts'
  });
};
