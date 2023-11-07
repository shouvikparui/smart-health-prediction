const express=require('express');
const {userModel,patientModel,doctorModel,adminModel,doubtModel}=require('../Model/index')

const router=express.Router();

router.get('/doctors',async(req,res)=>{
    try{
        return res.status(200).json({message:await doctorModel.find({}).populate('userId')})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})
router.post('/postdoubt',async(req,res)=>{
    const {comment,postedBy}=req.body;
    try{
        const post=new doubtModel({comment,postedBy})
        await post.save();
        return res.status(200).json({message:post})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})
router.get('/getdoubts',async(req,res)=>{
    try{
        return res.status(200).json({message:await doubtModel.find({})})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})
module.exports=router;