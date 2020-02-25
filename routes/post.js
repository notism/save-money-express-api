// const express = require('express');
// const router = express.Router();
// // const Post = require('../models/Post');
// const User = require('../controller/user');
// const Post = require('../controller/post');

// //TEST

// router.post('/post/create/:id', Post.create);
// router.post('/post/populate/:id',Post.userByPost);
// //END TEST

// // // Get all
// // router.get('/', async (req,res)=>{
// //     try{
// //         const post = await Post.find();
// //         res.json(post);
// //     }catch (err){
// //         res.json({ message: err});
// //     }
// // })

// // // Get by id
// // router.get('/:postId', async (req,res)=>{
// //     try{
// //         const post = await Post.findById(req.params.postId);
// //         res.json(post);
// //     }catch (err){
// //         res.json({ message: err});
// //     }
// // })

// // // Post
// // router.post('/', async (req,res)=>{
// //     // console.log(req.body);
// //     const post = new Post({
// //         title: req.body.title,
// //         description: req.body.description
// //     })

// //     try{
// //         const savePost = await post.save();
// //         res.json(savePost);   
// //     }catch(err){
// //         res.json({message: err})
// //     }
// //     // .then(data =>{
// //     //     res.json(data);
// //     // })
// //     // .catch(err => {
// //     //     res.json({ message: err})
// //     // })
// // })

// // // Patch
// // router.patch('/:postId', async (req,res)=>{
// //     try{       
// //         const updatepost = await Post.updateOne(
// //             { _id: req.params.postId},
// //             { $set: {title:req.body.title,description:req.body.description}}            
// //         );
// //         res.json(updatepost);
// //     }catch (err){
// //         res.json({ message: err});
// //     }
// // })

// // // Delete
// // router.delete('/:postId', async (req,res)=>{
// //     try{
// //         const removepost = await Post.remove({ _id: req.params.postId});
// //         res.json(removepost);
// //     }catch (err){
// //         res.json({ message: err});
// //     }
// // })

// module.exports = router;