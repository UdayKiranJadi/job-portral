import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,

    },
    description:{
        type:string,
        required:true
    },
    requirments:[{
        type:string,
        
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobtype:{
        type: string,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'application'
        }
    ]



},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);
