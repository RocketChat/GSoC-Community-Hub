import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const navbarSchema = new Schema(
    {
        first: {
            type: String,
        },
        
        second: {
            type: String
        }
    },
    { collection: "navbars" }
);

export const navbars =
  mongoose.model.navbars ||
  mongoose.model('navbars', navbarSchema);