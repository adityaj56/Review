const User = require('../models/user');
const Review = require('../models/review');

module.exports.page = async function(req, res){
    try {
        let user = await User.findById(req.user.id).populate('assigned');
        return res.render('create_review', {
            title: 'Create Review',
            layout: 'layouts/layout2',
            employee_list: user.assigned
        });
    } catch (error) {
        console.log('Error: ', error);
        return res.redirect('back');
    }
}

module.exports.createReview = async function(req, res){
    try {
        let employee = await User.findById(req.body.employee);
        let newReview = await Review.create({
            user: req.user._id,
            workEfficiency: req.body.workEfficiency,
            qualityOfWork: req.body.qualityOfWork,
            teamWork: req.body.teamWork,
            learningAbility: req.body.learningAbility,
            adherenceToTimelines: req.body.adherenceToTimelines,
        });
         await employee.reviews.push(newReview._id);
         await employee.save();
         await User.findByIdAndUpdate(req.user._id, { $pull: {assigned: req.body.employee}});
         return res.redirect('back');
    } catch (error) {
        console.log('Error: ', error);
        return res.redirect('back');
    }
}