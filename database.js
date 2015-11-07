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
}, {collection : 'items'})

var Item = mongoose.model('Item', itemSchema)

module.exports = {
  getItemData: function(id, res) {
    Item.find({
      '_id' : { $in : id }
    },
    'name img',
    function (err, docs) {
      res.send(docs);
    })
  }
}
