const Transaction = require('../models/Transaction');
const User = require('../models/User');

module.exports = { 
    create : async (req,res)=>{        
        id = req.params.userId;
        const { title, money} = req.body;
        const tran = await Transaction.create({
            title,
            money,
            createdBy:id         
        });      
        try{                
            const saveTransaction = await tran.save();
            await User.updateOne(
                { _id: id},
                { $set: {                    
                    money:req.body.money
                }}            
            );
            res.status(200).json(saveTransaction);   
        }catch(err){
            res.status(400).json({message: err})
        }  
    },
    find : async (req,res)=>{        
        try{
            const tran = await Transaction.find().populate('createdBy');    
            res.status(200).json(tran);
        }catch (err){
            res.status(400).json({ message: err});
        }
    }    
}