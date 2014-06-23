var config = require('./config');

var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var errorHandler = require('express-error-handler');
var fs = require('fs');

app.engine('.html', exphbs({
    defaultLayout: 'template',
    extname: '.html'
}));
app.set('view engine', '.html');

var controllers = [];

app.use(express.static(__dirname + '/public'));

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

console.log("PORT " + config.CONFIG.Port);

LoadControllers();


var server = app.listen(config.CONFIG.Port, function () {
    console.log('Listening on port %d', server.address().port);
});




function LoadControllers() {
	// Load list of files
	var pluginFiles = fs.readdirSync('./controllers');

	for (var i = 0; i < pluginFiles.length; i++) {
		console.log("Loading controller: " + pluginFiles[i]);
		
		var c = require('./controllers/' + pluginFiles[i]);

		c.Setup(app);

		controllers.push(c);
	}
}
