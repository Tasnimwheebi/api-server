'use strict';

const express = require('express');
const DataManager = require('../models/dataManager.js');
const Clothes = require('../models/clothes.js');

const dataManager = new DataManager(Clothes);
const router = express.Router();

router.get('/',getClothes);
router.get('/:id',getClohesWithId);
router.post('/',createClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

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