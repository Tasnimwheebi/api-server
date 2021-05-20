'use strict';

const express = require('express');
const DataManager = require('../models/dataManager.js');
const Food = require('../models/food.js');


const dataManager = new DataManager(Food);
const router = express.Router();

router.get('/',getFood);
router.get('/:id',getFoodWithId);
router.post('/',createFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

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