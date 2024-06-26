const express = require('express');

const router = express.Router();
const User = require('../models/User')
const {body,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret = "RomanEmpireHarshVardhanPriti"
router.post('/createuser',
    body('email').isEmail(),
    body('name').isLength({min:3}),
    body('password','Incorrect Password').isLength({min:5}),
    async(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const salt = await bcrypt.genSalt(10);
        let securePassword=await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name:req.body.name,
            password:securePassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post('/loginuser',
    body('email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const { email, password } = req.body;
        
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ errors: "Invalid user credentials" });
            }
            const pwdCompare = await bcrypt.compare(password,user.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Invalid credentials" });
            }

            const data ={
                user:{
                    id:user._id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            res.json({ success: true, authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;