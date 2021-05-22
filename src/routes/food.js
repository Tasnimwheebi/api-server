'use strict';

///////access express/////////////
const express = require('express');

//////// accssing the model of the class Datamanager from the js file /////////
const DataManager = require('../models/dataManager.js');

//////// accssing the food schema model from the food model js file /////////
const Food = require('../models/food.js');


///////// creating a new object from the class Datamanager 
////////accessing the food schema model in js file /////
const dataManager = new DataManager(Food);

const router = express.Router();


///////////////////////////
//////// ROUTES  /////////
/////////////////////////

///// route get method for read /////
router.get('/',getFood);
router.get('/:id',getFoodWithId);

///// route post method for create ////   
router.post('/',createFood);

////// route put method for update ////
router.put('/:id',updateFood);

////// route delete method for delete /////
router.delete('/:id',deleteFood);



//////////////////////////////
//// middleware functions////
////////////////////////////
/////////// CRUD //////////
async function getFood (req,res,next){
  try{
    const resObj = await dataManager.read();
    res.json(resObj); 
  }catch(e){
    next(e);
  }
 
}

async function getFoodWithId (req,res,next){
  try{
    const resObj =await dataManager.read(req.params.id);
    res.json(resObj); 
  }catch(e){
    next(e);
  }
  
}

async function createFood (req,res,next){
  try{
    const objFood = req.body;
    const resObj =await dataManager.create(objFood);
    res.status(201).json(resObj); 
  }catch(e){
    next(e);
  }
  
}

async function updateFood (req,res,next){
  try{
    const objFood = req.body;
    const resObj = await dataManager.update(req.params.id,objFood);
    res.json(resObj);  
  }catch(e){
    next(e);
  }
      
  
}
async function deleteFood(req, res,next) {
  try{
    const objFood =await dataManager.delete(req.params.id);
    res.json(objFood);
  }catch(e){
    next(e);
  }  
}

module.exports=router;