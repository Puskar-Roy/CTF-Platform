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
      type: String
    },
  },
  { timestamps: true }
);


export default mongoose.models.User ||
  mongoose.model<Users>("ctf-users-v0.0", userSchema);

// export default User;
