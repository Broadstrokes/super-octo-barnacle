const 
  express = require('express'),
  stylus = require('stylus'), 
  nib = require('nib'); 

const app  = express();
let port = process.env.PORT || 3000;

(str, path) => {
  stylus(str)
  .set('filename', path)
  .use(nib())
} 
/*
app.set directives tell Express where we keep our views &
to use pug 
*/
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
/*
app.use calls pass middleware function for Express to use
Middleware are simply functions that have the signature fn(req, res, next)
*/
/*
The first piece of middleware we apply is the Express logger in 'dev' mode. This will simply log incoming requests to the console
*/
app.use(express.logger('dev'))
/*
Next, the Stylus middleware is applied, which will compile our .styl files to CSS.
In order to use nib, we pass in a custom compile function to the Stylus middleware. 
*/
app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: compile
}))
/*
After that it's the Express static middleware, which is used for serving static files (we tell it that our static files will live in a folder called 'public', so lets create that in the project root now)
*/
app.use(express.static(__dirname + '/public'));


app.get('/',  (req, res) => res.send('Hello world!'));

app.listen(port, () => 
  console.log(`Listening on port ${port}, in ${process.env.NODE_ENV} mode!`));



