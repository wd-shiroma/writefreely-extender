var express = require('express');
var router = express.Router();

const sequelize = require('../models/sequelize-instance');
const users = sequelize.import('../models/users');
const collections = sequelize.import('../models/collections');
const posts = sequelize.import('../models/posts');
const moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.moment = moment;

  users.hasMany(collections, {
    foreignKey: 'owner_id',
    sourceKey: 'id'
  })

  collections.belongsTo(users, {
    foreignKey: 'owner_id',
    targetKey: 'id'
  });

  posts.belongsTo(collections, {
    foreignKey: 'collection_id',
    sourceKey: 'id'
  })

  posts.belongsTo(users, {
    foreignKey: 'owner_id',
    sourceKey: 'id'
  })

  posts.findAll({
    include: [
      {model: users},
      {model: collections},
    ],
    order: [ ['updated', 'DESC'] ],
    limit: 50
  })
  .then(posts => {
    posts = posts.map(p => {
      p.dataValues.updated_obj = new Date(p.dataValues.updated)
      console.log(p.dataValues.updated_obj);
      return p
    })
    res.render('index', {
      posts: posts,
      title: process.env.TITLE
    });
  });

});

module.exports = router;
