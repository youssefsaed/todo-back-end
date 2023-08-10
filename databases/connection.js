import mongoose from "mongoose";

export const dbConnection=()=>mongoose.connect(process.env.DBURL)
.then(()=>console.log("dbConnection ....."))
.catch((error)=>console.log({dbError:error}))