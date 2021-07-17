import * as mongoose from "mongoose";

export const connect = mongoose.connect('mongodb://mongodb:27017/flash',{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    ,(err: any)=>{
    if(err){
        console.log("Opps");
    } else {
        console.log("Mongo connected....");
    }
});

