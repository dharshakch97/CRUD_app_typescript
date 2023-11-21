import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
    title: string,
    description: string
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Post = mongoose.model<IPost>("Posts", PostSchema)
