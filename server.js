const 
  express = require('express'),
  stylus = require('stylus'), 
  nib = require('nib'); 

const app  = express();
let port = process.env.PORT || 3000;

app.get('/',  (req, res) => res.send('Hello world!'));


app.listen(port, () => 
  console.log(`Listening on port ${port}, in ${process.env.NODE_ENV} mode!`));



