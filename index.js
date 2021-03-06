'use strict';

//////////////////////////////////
//// require the enviroment /////
////////////////////////////////
require('dotenv').config();


const mongoose = require('mongoose');
const server = require('./src/server.js');


////////////////////////////////////////
// Connecting the app with database////
/////////     THEN       /////////////
/////  start accssing the app ///////
/// Catch the error if its foud ////
///////////////////////////////////
mongoose
  .connect(process.env.MONGOOSE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((e) => {
    console.log('CONNECTION_ERROR', e.mssage);
  });