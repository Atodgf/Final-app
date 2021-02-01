import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const User = mongoose.model('User')
const jwtkey = "asdqweqwasdasd"

module.exports = (req:any, res:any, next:any)=>{
    const { authorization } = req.headers 
    if (!authorization) {
        return res.status(401).send({error:"you must be logged in"})
    } 
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, jwtkey, async (err:any, payload:any)=>{
        if (err){
          return res.status(401).send({error:"you must be logged in"})
        }
    const {userId} = payload    
    const user = await User.findById(userId)
    req.user=user
    next()
    })
}

export default module.exports