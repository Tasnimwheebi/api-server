'use strict';

/////////////////////////////////////////
////////// App dependencies ////////////
///////////////////////////////////////
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


//////////////////////////////////////////
///// error handler or bad request handler
//////////////////////////////////////////
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');


//// Routes /////////
const foodRoute = require('./routes/food.js');
const clothesRout = require('./routes/clothes.js');


//////////////////////////////////////////
/////////    App setup   ////////////////
////////////////////////////////////////
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


//////////////////////////////////////////
//////// app middlewares  ///////////////
////////////////////////////////////////
app.get('/',(req,res)=>{
  res.send('Welcome to Home Page');
});
app.use('/api/v1/food', foodRoute);
app.use('/api/v1/clothes', clothesRout);



//////////////////////////////////////////
///// error or bad request middlewares ///
//////////////////////////////////////////
app.use('*', notFoundHndler);
app.use(errorHandler);


//////////////////////////////////////////
// export the server and start of listening
//////////////////////////////////////////
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 4000;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  },
};