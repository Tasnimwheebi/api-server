'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  name:{type:String,require:true},
  color:{type:String},
});
const ClothesModel = mongoose.model('Clothes',clothesSchema);
module.exports = ClothesModel;