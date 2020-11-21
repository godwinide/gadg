const router = require("express").Router();
const Faculty = require("../../../model/Faculty");

/*  @route /api/faculties/
    @method get 
    @access public 
*/
router.get("/", async (req,res) => {
    try{
        const faculties = await Faculty.find({});
        return res.status(200).json({faculties, success: true})
    }
    catch(err){
        console.error(err);
        return res.status(500).json({success: false, errors: [err]})
    }
});

/*  @route /api/faculties/
    @method get 
    @access public 
*/
router.get("/filterById/:slug", async (req,res) => {
    try{
        const {slug} = req.params; 
        const faculty = await Faculty.findOne({nameSlug:slug});
        return res.status(200).json({faculty, success: true})
    }
    catch(err){
        console.error(err);
        return res.status(500).json({success: false, errors: [err]})
    }
});


module.exports = router;