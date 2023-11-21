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

export const searchPosts = async (searchTitle: string, pageNum: number, pageSize: number) => {
    return new Promise(async(resolve, reject) => {

        const filteredPosts = await Post.find({
            title: { $regex: searchTitle, $options: "i" },
        }
        ).skip(pageSize * (pageNum-1))
        .limit(pageSize)

        // let total = Post.find({
        //     title: { $regex: searchString, $options: "i" }
        // }).countDocuments()
        resolve(filteredPosts)
    })
}

export const deletePostById = async (postId: String) => {
    return new Promise(async(resolve, reject) => {
        const deletePost = await Post.findByIdAndDelete(postId)
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
