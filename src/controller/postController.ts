import { Request, Response, Router } from 'express'
import { addNewPost, deletePostById, getAllPosts, updatePostById } from '../services/postService'

const router = Router() 

export const createNewPost = async (req: Request, res: Response) => {
    const post_description = req.body.post

    await addNewPost(post_description)
    .then((response: any) => { res.status(200).json({status: "success", response: response}) })
    .catch((error) => { res.status(401).send({status: "error",response: error}) })
}

export const fetchAllPosts = async (req: Request, res: Response) => {
    await getAllPosts()
    .then((response: any) => { res.status(200).json({status: "success", response: response}) })
    .catch((error) => { res.status(401).send({status: "error",response: error}) })
}

export const updatePost = async (req: Request, res: Response) => {
    let postId: String = req.body.post_id
    let postObject: any = req.body.post_obj

    updatePostById(postId, postObject)
    .then((response: any) => { res.status(200).json({status: "success", response: response}) })
    .catch((error) => { res.status(401).send({status: "error",response: error}) })
}

export const deletePost = async (req: Request, res: Response) => {
    let postId: String = req.body.post_id
    
    deletePostById(postId)
    .then((response: any) => { res.status(200).json({status: "success", response: response}) })
    .catch((error) => { res.status(401).send({status: "error",response: error}) })
}
