import { IPost, Post } from "../models/Post"


export const addNewPost = async (postDescription: any) => {
    return new Promise(async(resolve, reject) => {
        const post = new Post({
            title: postDescription.title,
            description: postDescription.description
        })
        await post.save().then((res) => { resolve(res) })
        .catch((error) => { reject(error) })
    })
}

export const getAllPosts = async () => {
    return new Promise(async(resolve, reject) => {
        const posts = Post.find({})
        if (posts) resolve(posts)
        else {
            reject("No posts found")
        }
    })
}

export const deletePostById = async (postId: String) => {
    return new Promise(async(resolve, reject) => {
        const deletePost = await Post.findByIdAndDelete(postId)
        console.log(`deleted post ${deletePost}`)
        if (deletePost) resolve(`Post id ${postId} deleted`)
        else {
            reject(`Post id ${postId} not found`)
        }
    })
}

export const updatePostById = async (postId: String, updateObject: any) => {
    return new Promise(async(resolve, reject) => {
        const updatePost = await Post.findByIdAndUpdate(postId, updateObject)
        console.log(`updated post ${updatePost}`)
        if (updatePost) {
            resolve(`Post id ${postId} updated`)
        }
        else { 
            reject(`Post id ${postId} not found`) 
        }
    })
}
