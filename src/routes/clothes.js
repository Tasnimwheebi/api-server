'use strict';
///////access express/////////////
const express = require('express');

//////// accssing the model of the class Datamanager from the js file /////////
const DataManager = require('../models/dataManager.js');

//////// accssing the clothes schema model from the clothes model js file /////////
const Clothes = require('../models/clothes.js');


///////// creating a new object from the class Datamanager 
////////accessing the clothes schema  model in js file ///
const dataManager = new DataManager(Clothes);


const router = express.Router();


///////////////////////////
//////// ROUTES  /////////
/////////////////////////

///// route get method for read /////
router.get('/',getClothes);
router.get('/:id',getClohesWithId);

///// route post method for create ////   
router.post('/',createClothes);

////// route put method for update ////
router.put('/:id',updateClothes);

////// route delete method for delete /////
router.delete('/:id',deleteClothes);



//////////////////////////////
//// middleware functions////
////////////////////////////
/////////// CRUD //////////
async function getClothes (req,res,next){
  try{
    const resObj =await dataManager.read();
    res.json(resObj);   
  }catch(e){
    next(e);
  }
}

async function getClohesWithId (req,res,next){
  try{
    const resObj =await dataManager.read(req.params.id);
    res.json(resObj);  
  }catch(e){
    next(e);
  }
}

async function createClothes (req,res,next){
  try{
    const objClothes = req.body;
    const resObj =await dataManager.create(objClothes);
    console.log(resObj);
    res.status(201).json(resObj);  
  }catch(e){
    next(e);
  }
}

async function updateClothes (req,res,next){
  try{
    const objClothes = req.body;
    const resObj =await dataManager.update(req.params.id,objClothes);
    res.json(resObj); 
  }catch(e){
    next(e);
  }
}

async function deleteClothes(req, res,next) {
  try{
    const objClothes =await dataManager.delete(req.params.id);
    res.json(objClothes);  
  }catch(e){
    next(e);
  }  
}

module.exports=router;