const router = require("express").Router();
const User = require("../../../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../../middleware/auth");

// @route POST /api/users/auth/login
// @access private
router.post("/login", async (req,res) => {
    const {email, password} = req.body;

    const errors = [];
    const return_errors = status => {
        return res.status(status).json({
            success: false,
            errors
        })
    }
    if(!email || !password){
        errors.push({msg:"Please fill all fields!"})
        return_errors(400);
    }
    else{
        try{
            const user = await User.findOne({email})
            if(!user) {
                errors.push({msg: "Incorrect email or password"})
                return_errors(400);
            }else{
                const matched = await bcrypt.compare(password, user.password)
                if(!matched){
                    errors.push({msg: "Incorrect email or password"})
                    return_errors(400)
                }else{
                    const token = jwt.sign(
                            {id: user.id},
                            process.env.JWTSECRET,
                            {expiresIn: 3600 * 5000}
                    )
                    return res.status(200).json({
                        success: true,
                        user,
                        token
                    })
                }
            }
        }catch(err){
            console.log(err)
            res.status(500).json({msg:"internal server error"})
        }
    }
})



/// @route POST /api/users/auth/login
// @access private
router.get("/user", auth, async (req,res) => {
    const {id} = req.user
    try{
        const user = await User.findById(id).select("-password");
        if(!user){
            return res.status(400).json({msg: "invalid user was sent"})
        }else{
            return res.status(200).json({user, success: true});
    }
    }catch(err){
        return res.status(500).json({msg:"internal server error"})
    }
})


/// @route POST /api/users/auth/change password
// @access private
router.post("/changePassword", auth, async (req,res) => {
    const {id} = req.user;
    try{
        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({msg: "invalid user was sent"})
        }else{
            const {currentPass, newPass, newPass2} = req.body;
            if(!currentPass || !newPass2 || !newPass){
                return res.status(400).json({msg: "Please fill all fields"});
            }
            if(newPass !== newPass2){
                return res.status(400).json({msg:"Both password are not thesame"});
            } 
            if(currentPass.length < 6 || newPass2.length < 6 || newPass.length < 6){
                return res.status(400).json({msg: "Password length should be between 6-20 characters long."});
            }            
            const isMatch = await bcrypt.compare(currentPass, user.password);
            if(!isMatch){
                return res.status(400).json({msg: "incorrect password"});
            }
            const salt = await bcrypt.genSalt();
            const newPassword = await bcrypt.hash(newPass, salt);
            await user.update({
                password: newPassword
            })
            return res.status(200).json({success: true, msg:"password changed successfully"});
    }
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"internal server error"})
    }
})


/// @route POST /api/users/auth/change password
// @access private
router.post("/changePassword2", async (req,res) => {
    const {newPass, newPass2, code, email} = req.body;
    if(!newPass2 || !newPass || !code ){
        return res.status(400).json({msg: "Please fill all fields"});
    }
    if(code.length < 6 || newPass2.length < 6 || newPass.length < 6){
        return res.status(400).json({msg: "Password length should be between 6-20 characters long."});
    }
    if(newPass !== newPass2){
        return res.status(400).json({msg:"Both password are not thesame"});
    }            
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "a user with that email does not exist"})
        }
        if(user.verifycode != code){
            return res.status(400).json({msg: "incorrect verification code was sent"});
        }
        else{
            const salt = await bcrypt.genSalt();
            const newPassword = await bcrypt.hash(newPass, salt);
            await user.update({
                password: newPassword,
                verifycode: Math.floor(Math.random()*1000000)
            })
            return res.status(200).json({success: true, msg:"password changed successfully"});
    }
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"internal server error"})
    }
})



module.exports = router;