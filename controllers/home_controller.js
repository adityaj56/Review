module.exports.home = function(req, res){
    res.render('home', {
        title: 'home',
        layout: 'layouts/layout2'
    });
}