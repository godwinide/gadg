const router = require("express").Router();
const sendmail = require("../../../mail/sendmail");
const contactMessageTemplate = require('../../../templates/contactMessageTemplate');

router.post("/", async (req,res) => {
    const {email, name, phone, body} = req.body;
    if(!email || !name || !body || !phone){
        return res.status(400).json({msg:"Please fill all fields!"})
    }
    else{
        const temp = contactMessageTemplate(email, name, phone, body);
        sendmail('klimaxcodez@gmail.com', 'Customer Contact', temp);
        return res.status(200).json({msg:"Your Message Has Been Sent, We Will Get Back To You As Soon As Possible."})
    }
});

module.exports = router;