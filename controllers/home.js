exports.Setup = function(app){
	app.get('/', this.home_get);
};

exports.home_get = function(req, res){
	res.render('home');
}