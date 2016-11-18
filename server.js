// Dependencies
var express = require('express');

var app = express();


//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// override with POST having ?_method=DELETE
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes
require('./controllers/controller.js')(app);

// Starts the server to begin listening
var PORT = 8080;
app.listen(PORT, function(){
	console.log('App listening on: http://localhost:' + PORT);
})


