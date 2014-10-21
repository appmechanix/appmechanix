exports.Setup = function (app) {
    app.get('/', this.home_get);
    app.get('/shnappy', this.shnappy_get);
    app.get('/quizblaster', this.quizblaster_get);
};

exports.home_get = function (req, res) {
    res.render('home', {layout: null});
};

exports.shnappy_get = function (req, res) {
    res.render('shnappy', {class: 'shnappy'});
};

exports.quizblaster_get = function (req, res) {
    res.render('quizblaster', {class: 'quizblaster'});
};