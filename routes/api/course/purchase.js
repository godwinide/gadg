const router = require("express").Router();
const auth = require("../../../middleware/auth");
const User = require("../../../model/User");
const uuid = require('uuid');
const Sales = require("../../../model/Sales");

// purchase courses
router.post("/", auth, async (req,res) => {
    try{
        const {newCourses, price, reference} = req.body;
        const newSale = {
            student: req.user,
            price,
            reference
        };
        const newCoursesID = [];
        newCourses.map(course => {
            const c = course
            c._id = uuid.v4()
            return c;
        });
        // update user
        const user = await User.findById(req.user.id);
        newCourses.forEach(co => {
            newCoursesID.push(co._id)
        })
        await user.updateOne({
            courses: [...user.courses, ...newCourses],
            coursesID: [...user.coursesID, newCoursesID]
        })
        // update sales
        const sale = new Sales(newSale);
        await sale.save();
        res.status(200).json({
            success: true,
            msg: "purchase successful!"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, msg: "internal server error"});
    }
})

// unluck a course topic
router.post("/topic", auth, async(req,res) => {
    try{
        const {courseID,topicID} = req.body;
        const newSale = {
            student: req.user,
            price,
            reference
        };
        // update user
        const user = await User.findById(req.user.id);
        const newCourses = user.courses.filter(course => course._id !== courseID);
        const targetCourse = user.courses.filter(course => course._id === courseID)[0];
        const newTopics = targetCourse.topics.map(topic => {
            const _topic = topic;
            if(topic.id === topicID){
                _topic.locked = false;
                return _topic;
            }else{
                return topic;
            }
        });
        targetCourse.topics = newTopics;
        newCourses.push(targetCourse);
        await user.updateOne({courses: newCourses})
        // update sales
        const sale = new Sales(newSale);
        await sale.save();
        return res.status(200).json({success:true});
    }catch(err){
        return res.status(200).json({success:false});
    }
})

module.exports = router;