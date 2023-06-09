const User = require('../models/user');

//To render settings page for admin
module.exports.settings = async function(req, res){
    try {
        if(req.user.isAdmin){
            let usersList = await User.find()
            .select('-password');

            return res.render('settings', {
                title: 'home',
                layout: 'layouts/layout2',
                users_list: usersList 
            });
        }
        return res.redirect('back');
    } catch (error) {
        console.log('Error: ', error);
    }
}

//assign a user admin previlages
module.exports.assignAdmin = async function(req, res){
    try {
        if(req.user.isAdmin){
            await User.findByIdAndUpdate(req.query.id,{isAdmin: true});
        }
        return res.redirect('back');
    } catch (error) {
        console.log('Error: ', error);
        return res.redirect('back');
    }
}

//Function to assign a user for review to another user
module.exports.addForReview = async function(req, res){
    try {
        if(req.user.isAdmin){
            let employee = await User.findById(req.body.employee);
            let employeeToAdd = await User.findById(req.body.addForReview);
            if(employee && employeeToAdd && !employee.reviews.includes(employeeToAdd._id)){
                employee.assigned.push(employeeToAdd._id);
                employee.save();
            }
            else{
                console.log('This employee is already present in the list of reviews');
            }
        }
        return res.redirect('back');
    } catch (error) {
        console.log('Error: ', error);
        return res.redirect('back');
    }
}

//Function to render the reviews page
module.exports.review = async function(req, res){
    try {
        if(req.user.isAdmin){
            let employee = await User.findById(req.query.id)
            .populate({
                path: 'reviews',
                populate: {
                    path: 'user'
                }
            });
            if(employee){
                return res.render('reviews',{
                    title: employee.name,
                    layout: 'layouts/layout2',
                    review_list: employee.reviews
                })
            }
        }
        return res.redirect('back');
    } catch (error) {
        console.log('Error: ', err);
        return res.redirect('back');
    }
}