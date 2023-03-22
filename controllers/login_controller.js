module.exports.login = function(req, res){
    res.render('login',{
        title: 'login',
        layout: 'layouts/layout1'
    });
}

module.exports.signup = function(req, res){
    res.render('signup',{
        title: 'sign-up',
        layout: 'layouts/layout1'
    });
}