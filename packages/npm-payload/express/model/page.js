import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pageSchema = new Schema(
    {
        title: {
            type: String,
        },
        
        content: {
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type: Date,
            default: Date.now
        }   
    },
    { collection: "pages" }
);

export const pages =
  mongoose.model.pages ||
  mongoose.model('pages', pageSchema);