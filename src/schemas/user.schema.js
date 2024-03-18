import mongoose from "mongoose";

const {Schema, model} = mongoose

const userSchema= new Schema({
  _id:{
    type: String,
    _id:false,
  },
  name: {
    type: String, 
    require: true,
    minLength: 2, 
    maxLength:30
  },
  email:{
    type: String,
    require: true,
    unique: true,
    minLength: 10,
    maxLength:50
  },
  password:{
    type:String,
    require:true,
    unique:true,
  }
});

const userModel= model('User'. userSchema);

export default userModel;

