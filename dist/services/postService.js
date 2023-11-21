"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = exports.deletePostById = exports.getAllPosts = exports.addNewPost = void 0;
const Post_1 = require("../models/Post");
const addNewPost = async (postDescription) => {
    return new Promise(async (resolve, reject) => {
        const post = new Post_1.Post({
            title: postDescription.title,
            description: postDescription.description
        });
        await post.save().then((res) => { resolve(res); })
            .catch((error) => { reject(error); });
    });
};
exports.addNewPost = addNewPost;
const getAllPosts = async () => {
    return new Promise(async (resolve, reject) => {
        const posts = Post_1.Post.find({});
        if (posts)
            resolve(posts);
        else {
            reject("No posts found");
        }
    });
};
exports.getAllPosts = getAllPosts;
const deletePostById = async (postId) => {
    return new Promise(async (resolve, reject) => {
        const deletePost = await Post_1.Post.findByIdAndDelete(postId);
        console.log(`deleted post ${deletePost}`);
        if (deletePost)
            resolve(`Post id ${postId} deleted`);
        else {
            reject(`Post id ${postId} not found`);
        }
    });
};
exports.deletePostById = deletePostById;
const updatePostById = async (postId, updateObject) => {
    return new Promise(async (resolve, reject) => {
        const updatePost = await Post_1.Post.findByIdAndUpdate(postId, updateObject);
        console.log(`updated post ${updatePost}`);
        if (updatePost) {
            resolve(`Post id ${postId} updated`);
        }
        else {
            reject(`Post id ${postId} not found`);
        }
    });
};
exports.updatePostById = updatePostById;
//# sourceMappingURL=postService.js.map