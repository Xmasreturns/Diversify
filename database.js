var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');
var bcrypt = require('bcrypt');


//mongoose.connect('mongodb://reader:imFnncLPz9@ds049754.mongolab.com:49754/diversify-db');
mongoose.connect('mongodb://dbwrite:C2EopDdfQ@ds049754.mongolab.com:49754/diversify-db');

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
  _id: Schema.Types.ObjectId,
  user: String,
  pass: String,
  apikey: String,
  bookmarks: [Number],
  investments: [{}]
}, {
  collection: 'users'
})

var Item = mongoose.model('Item', itemSchema)
var User = mongoose.model('User', userSchema)

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
  createUserData: function(user, pass) {
    var u = new User({
      _id: new mongoose.Types.ObjectId(),
      user: user,
      pass: bcrypt.hashSync(pass, 5),
      apikey: 0,
      bookmarks: [],
      investments: [{}]
    })
    u.save(
      function(err, newuser) {
        if (err){
          console.log(err)
          return err;
        }
        console.log("Created")
        return newuser;
      }
    )
  },
  checkUserName: function(name, res) {
    User.findOne({ user : name }, function(err, user) {
      if (err)
        return false;
      if (user) {
        return false;
      } else {
        return true;
      }
    })
  },
  User: User
}
