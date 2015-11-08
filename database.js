var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');

mongoose.connect('mongodb://reader:imFnncLPz9@ds049754.mongolab.com:49754/diversify-db');

var itemSchema = new Schema({
  _id: Number,
  name: String,
  rarity: Number,
  restriction_level: Number,
  img: String,
  type_id: Number,
  sub_type_id: Number
}, {
  collection: 'items'
})

var userSchema = new Schema({
  user: String,
  pass: String,
  apikey: String,
  bookmarks: [Number],
  investments: [{}]
}, {
  collection: 'users'
})

var Item = mongoose.model('Item', itemSchema)
var User = mongoose.model('User', itemSchema)

module.exports = {
  getItemData: function(id, res) {
    Item.find({
        '_id': {
          $in: id
        }
      },
      'name img',
      function(err, docs) {
        res.send(docs);
      })
  },
  createUserData: function(data, res) {
    User.create({
        user: data.user,
        hash: data.hash,
        apikey: data.apikey,
        bookmarks: [],
        investments: [{}]
      },
      function(err, newuser) {
        if (err)
          return console.log("error : " + err);
        console.log(newuser);
      }
    )
  }
}
