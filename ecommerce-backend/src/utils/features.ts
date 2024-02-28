import mongoose from "mongoose"



export const sonnectionDB = () => {
    mongoose.connect("", 
    {
        dbName: "Ecommerce 24",
    });
};