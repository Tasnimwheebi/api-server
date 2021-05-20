'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

/// error handlers
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');


//// Routes
const foodRoute = require('./routes/food.js');
const clothesRout = require('./routes/clothes.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/',(req,res)=>{
  res.send('Welcome to Home Page');
});
app.use('/api/v1/food', foodRoute);
app.use('/api/v1/clothes', clothesRout);

/// middleware errors
app.use('*', notFoundHndler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 4000;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  },
};