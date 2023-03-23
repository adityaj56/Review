
const User = require('../models/user');

module.exports.createUser = async function(req, res){
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            console.log('User already exists!');
            return res.redirect('back');
        }
        else{
            let newUser = await User.create(req.body);
            console.log('New User created: ', newUser.name);
            return res.redirect('/');
        }   
    } catch (error) {
        console.log('Error while signing up the new user: ', error);
        return res.redirect('back');
    }
}

module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'Profile',
        layout: 'layouts/layout2'
    });
}

