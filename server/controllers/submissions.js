const Submission = require('../models/submission');

exports.getSubmissions = (req,res,next) => {
    res.status(200).json({"title":"article 1 from backend", "likes": 10})
};

exports.postSubmissions = (req,res,next) => {

    //Return 201 status code - resource succesfully created
};