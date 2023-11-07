const mongoose=require('mongoose');
require('../connectDb');

const userSchema=new mongoose.Schema({
    entity:{
        type:String,
        required:true,
        enum:['patient','admin','doctor']
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})
const patientSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})
const doctorSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    name:String,
    specialist:String,
    patients:Number    
})
const adminSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel',
        required:true
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})
const appointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PatientModel'
    },
    doctorCheck:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DoctorModel'
    },
    date:{
        type:Date,
        required:true
    },

})
const doubtSchema=new mongoose.Schema({
    comment:{type:String},
    date:{type:String,default:()=>{
        const date=new Date();
        return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear();
    }},
    postedBy:{type:String}
})
const userModel=new mongoose.model('UserModel',userSchema);
const patientModel=new mongoose.model('PatientModel',patientSchema);
const doctorModel=new mongoose.model('DoctorModel',doctorSchema);
const adminModel=new mongoose.model('AdminModel',adminSchema);
const appointmentModel=new mongoose.model('AppointmentModel',appointmentSchema);
const doubtModel=new mongoose.model('DoubtModel',doubtSchema);

module.exports={userModel,patientModel,doctorModel,adminModel,appointmentModel,doubtModel}