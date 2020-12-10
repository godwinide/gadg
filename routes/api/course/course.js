const router = require("express").Router();
const Course = require("../../../model/Course");
const Faculty = require("../../../model/Faculty")
const uuid = require("uuid");
const auth = require("../../../middleware/auth");



// @route /api/courses/all
// @method get 
// @access public
router.get("/all", async (req,res) => {
    try{
        const courses = await Course.find({published:true});
        return res.status(200).json({
            success: true,
            courses
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            errors: [{msg: "internal server error"}]
        })
    }
})

// @route /api/courses/popular
// @method get 
// @access public
router.get("/popular", async (req,res) => {
    try{
        const courses = await Course.find({published:true})
        const popular = courses.sort((a,b)=> a.sales > b.sales ? 1 : 0);
        return res.status(200).json({
            success: true,
            courses: popular
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            errors: [{msg: "internal server error"}]
        })
    }
})


// @route /api/courses/one/id
// @method get 
// @access private
router.get("/one/:id", async (req,res) => {
    const errors = [];
    const return_errors = status => {
        return res.status(status).json({
            success: false,
            errors
        })        
    }
    try{
        const {id} = req.params;
        if(!id){
            errors.push({msg: "Please provide a course ID!"})
            return_errors();
        }
        const course = await Course.findOne({titleSlug:id, published:true})
        return res.status(200).json({
            success: true,
            course
        })
    }catch(err){
        errors.push ({msg: "internal server error"})
        return_errors();
    }
});


/*  @route /api/courses/one/id
    @method get 
    @access public
 */
router.get("/filterByFaculty/:id", async (req,res) => {
    const errors = [];
    const return_errors = status => {
        return res.status(status).json({
            success: false,
            errors
        })        
    }
    try{
        const {id} = req.params;
        if(!id){
            errors.push({msg: "Please provide a faculty ID!"})
            return_errors();
        }
        const courses = await Course.find({facultyID:id, published: true})
        return res.status(200).json({
            success: true,
            courses
        })
    }catch(err){
        errors.push ({msg: "internal server error"})
        return_errors();
    }
})

/*  @route /api/courses/search
    @method get 
    @access public
 */
router.get("/search", async (req,res) => {
    try{
        const query = req.query.q;
        if(query){
            const courses = await Course.find({$text:{$search:query}});
            return res.status(200).json({courses});
        }else{
            return res.status(200).json({courses:[]});
        }
    }catch(err) {
        console.log(err);
    }
})

module.exports = router;