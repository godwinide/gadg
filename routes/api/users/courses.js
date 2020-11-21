const router = require("express").Router();
const User = require("../../../model/User");
const auth = require("../../../middleware/auth");

router.get("/:id", auth, async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(req.user.id);
    if(user){
        course = user.courses.filter(c => c._id === id)[0];
        if(course){
            return res.status(200).json({
                course,
                success: true
            })
        }else{
            return res.status(404).json({
                success: false
            })
        }
    }else{
        return res.status(404).json({
            success: false
        })
    }
});

module.exports = router;