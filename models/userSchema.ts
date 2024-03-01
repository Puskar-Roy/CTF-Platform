import mongoose, { Schema, model } from "mongoose";
import { Users } from "@/interfaces";

const userSchema = new Schema<Users>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    role:{
      type:String,
      default:"User"
    }
  },
  { timestamps: true }
);

// let dbName = "User-dev";
// if (process.env.ENV === "PROD") {
//   dbName = "User";
// }

export default mongoose.models.User || mongoose.model("User", userSchema);
