// const Post = require('../models/Post');
// const User = require('../models/User');

// module.exports = {
//     create : async (req, res) => {
//         console.log(req.params);
//         user = req.params;
//         id = user.id;
//         const { title, description} = req.body;
//         const post = await Post.create({
//             title,
//             description,
//             user:id
//         });
//         await post.save();

//         const userById = await User.findById(id);

//         userById.posts.push(post);
//         await userById.save();

//         return res.send(userById);
//     },
//     userByPost : async (req,res)=>{
//         const { id } = req.params;
//         const userByPost = await Post.findById(id).populate('user');
//         res.send(userByPost);
//     }
// }