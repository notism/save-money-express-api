const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = { 
    create : async (req,res)=>{   
        const { username, firstname,lastname} = req.body;
        const user = await User.create({
            username,
            firstname,
            lastname,
        });      
        try{
            const saveUser = await user.save();
            res.status(200).json(saveUser);   
        }catch(err){
            res.status(400).json({message: err})
        }  
    },
    register : async (req,res) => {  
        const { username, email, password} = req.body;

        const emailExist = await User.findOne({email: email,username: username})
        if(emailExist) return res.status(400).send('Email or Username already exists')
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password:hashPassword,
        });      
        try{
            const saveUser = await user.save();
            res.status(200).json(saveUser);   
        }catch(err){
            res.status(400).json({message: err})
        }  
    },
    login :async (req,res)=>{       
        try{           
            const user = await User.findOne({username: req.body.username});
            if(!user) return res.status(400).json('Username or password is wrong');
    
            const validPassword = await bcrypt.compare(req.body.password, user.password );            
            if(!validPassword) return res.status(400).json('Invalid password'); 

            res.status(200).json(user);  
        }catch(err){                     
            res.status(400).json({message: err})
        }      
    },
    find : async (req,res)=>{
        try{
            const user = await User.find();
            res.status(200).json(user);
        }catch (err){
            res.status(400).json({ message: err});
        }
    },
    patch : async (req,res)=>{
        try{       
            await User.updateOne(
                { _id: req.params.userId},
                { $set: {
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    password:req.body.password
                }}            
            );
            res.status(200).json({ message: 'Update Succesfully'});
        }catch (err){
            res.status(400).json({ message: err});
        }
    },
    delete : async (req,res)=>{
        try{
            const removepost = await User.remove({ _id: req.params.userId});
            res.status(200).json(removepost);
        }catch (err){
            res.status(400).json({ message: err});
        }
    }
}