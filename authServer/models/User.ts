import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

// userSchema.pre('save',function(next){
//     let user = this;
    
//     if(!user.isModified('password')){
//         return next()
//     }
//     bcrypt.genSalt(10,(err,salt)=>{
//         if(err){
//             return next(err)
//         }
//     bcrypt.hash(user.toString(),salt,(err,hash:any)=>{
//          if(err){
//              return next(err)
//          }
//          console.log(hash)
//         user = hash;
//         next()
//      })

//     })

// })


// userSchema.methods.comparePassword = function(candidatePassword) {
//     const user:any = this;
//     return new Promise((resolve,reject)=>{
//         bcrypt.compare(candidatePassword,user,(err,isMatch)=>{
//             if(err){
//                 return reject(err)
//             }
//             if (!isMatch){
//                 return reject(err)
//             }
//             resolve(true)
//         })
//     })
// }


export default userSchema