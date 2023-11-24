"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.filteredPosts = exports.fetchAllPosts = exports.createNewPost = void 0;
const express_1 = require("express");
const postService_1 = require("../services/postService");
const router = (0, express_1.Router)();
const createNewPost = async (req, res) => {
    const post_description = req.body.post;
    await (0, postService_1.addNewPost)(post_description)
        .then((response) => { res.status(200).json({ status: "success", response: response }); })
        .catch((error) => { res.status(401).send({ status: "error", response: error }); });
};
exports.createNewPost = createNewPost;
const fetchAllPosts = async (req, res) => {
    await (0, postService_1.getAllPosts)()
        .then((response) => { res.status(200).json({ status: "success", response: response }); })
        .catch((error) => { res.status(401).send({ status: "error", response: error }); });
};
exports.fetchAllPosts = fetchAllPosts;
const filteredPosts = async (req, res) => {
    let requestData = req.body;
    let pageNo = requestData.page_no ? requestData.page_no : 1;
    let pageSize = requestData.size ? requestData.size : 10;
    let searchTitle = req.body.search_title;
    let searchDesc = req.body.search_desc;
    await (0, postService_1.searchPosts)(searchTitle, searchDesc, pageNo, pageSize)
        .then((response) => { res.status(200).json({ status: "success", response: response }); })
        .catch((error) => { res.status(401).send({ status: "error", response: error }); });
};
exports.filteredPosts = filteredPosts;
const updatePost = async (req, res) => {
    let postId = req.body.post_id;
    let postObject = req.body.post_obj;
    (0, postService_1.updatePostById)(postId, postObject)
        .then((response) => { res.status(200).json({ status: "success", response: response }); })
        .catch((error) => { res.status(401).send({ status: "error", response: error }); });
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    let postId = req.body.post_id;
    (0, postService_1.deletePostById)(postId)
        .then((response) => { res.status(200).json({ status: "success", response: response }); })
        .catch((error) => { res.status(401).send({ status: "error", response: error }); });
};
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map