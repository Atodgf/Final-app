import express from 'express'
import mongoose  from 'mongoose'
import userSchema from '../models/User'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

const router = express.Router()
router.use(bodyParser.json())
const jwtkey = "asdqweqwasdasd"
const User = mongoose.model('User', userSchema)

router.post('/signup', async (req, res) =>{
    const {email, password} = req.body
    try{
        const user = new User ({email, password})
        await user.save()
        const token = jwt.sign({userId:user._id}, jwtkey,)
        res.send({token})
    }catch(err){
        return  res.status(422).send(err.message)
    }
})

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{   
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
})

export default router