'use strict';

////// require the mongoose ////////
const mongoose = require('mongoose');


//////////////////////////////////////////
/////// creating new schema model ///////
////////////////////////////////////////
const foodSchema = new mongoose.Schema({
  name:{type:String,require:true},
  type:{type:String},
});
const FoodModel = mongoose.model('Food',foodSchema);
module.exports = FoodModel;