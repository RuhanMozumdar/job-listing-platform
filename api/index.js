const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Applicant =require('./models/Applicant.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Razorpay = require('razorpay');
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'jssldfsljfljasflkdja';

require('dotenv').config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));


// Create a new instance of Razorpay
const razorpay = new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY_ID,
    key_secret:process.env.RAZORPAY_API_KEY_SECRET,
  });
  

mongoose.connect(process.env.MONGO_URL);
console.log("Hello World")

app.get('/test',(req,res)=>{
    res.json('test ok');
});

app.post('/register',async(req,res)=>{
    const {name ,email ,password} =req.body;
    try{
        const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
    });
    res.json(userDoc);
    }catch(e){
        res.status(422).json(e);
    }
});

app.post('/apply/:job',async(req,res)=>{
    const {name, phoneNo, college, address} =req.body;
    const {job} = req.params;
    console.log(`Applying for job : ${job}`);
    const existingApplicant = await Applicant.findOne({phoneNo});
    if(existingApplicant){
        return res.status(400).json({error:'phone number already used'});
    }else{
        try{
            const userDoc = await Applicant.create({
            name,
            phoneNo,
            college,
            address,
            job,
        });
        res.json(userDoc);
        }catch(e){
            res.status(422).json(e);
        }
    }

});

app.post('/login',async(req,res)=>{
    const {email ,password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
        const passOk = bcrypt.compareSync(password,userDoc.password);
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json('pass ok');
            });
        }else{
            res.status(422).json('pass not ok');
        }
    }else{
        res.json('not found');
    }
});

app.get('/profile', (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
});

// Add a new endpoint to initiate Razorpay payment
app.post('/payment', async (req, res) => {
    try {
      const orderAmount = 45000; // Amount in paise (45000 paise = Rs 450)
      const currency = 'INR';
      const options = {
        amount: orderAmount,
        currency,
        receipt: 'registration_receipt',
        payment_capture: 1 // Auto capture the payment
      };
  
      const order = await razorpay.orders.create(options);
  
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create payment order' });
    }
  });
  

app.listen(4000);
