"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.fetchAllPosts = exports.createNewPost = void 0;
const express_1 = require("express");
const postService_1 = require("../services/postService");
const router = (0, express_1.Router)();
const createNewPost = async (req, res) => {
    const post_description = req.body.post;
    await (0, postService_1.addNewPost)(post_description)
        .then((response) => { res.status(200).json(response); })
        .catch((error) => { res.status(401).send(error); });
};
exports.createNewPost = createNewPost;
const fetchAllPosts = async (req, res) => {
    await (0, postService_1.getAllPosts)()
        .then((response) => { res.status(200).json(response); })
        .catch((error) => { res.status(401).send(error); });
};
exports.fetchAllPosts = fetchAllPosts;
const updatePost = async (req, res) => {
    let postId = req.body.post_id;
    let postObject = req.body.post_obj;
    (0, postService_1.updatePostById)(postId, postObject)
        .then((response) => { res.status(200).json(response); })
        .catch((error) => { res.status(401).send(error); });
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    let postId = req.body.post_id;
    (0, postService_1.deletePostById)(postId)
        .then((response) => { res.status(200).json(response); })
        .catch((error) => { res.status(401).send(error); });
};
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map