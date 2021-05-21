'use strict';

////// require the mongoose ////////
const mongoose = require('mongoose');


//////////////////////////////////////////
/////// creating new schema model ///////
////////////////////////////////////////
const clothesSchema = new mongoose.Schema({
  name:{type:String,require:true},
  color:{type:String},
});
const ClothesModel = mongoose.model('Clothes',clothesSchema);
module.exports = ClothesModel;