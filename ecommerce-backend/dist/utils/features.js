import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://0.0.0.0:27017", {
        dbName: "Ecommerce_24",
    }).then(c => console.log(`DB connected to ${c.connection.host}`)).
        catch((e) => console.log(e));
};
