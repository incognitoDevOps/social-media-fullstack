import usermodel from "../module/user.module.js";
import bcrypt from "bcrypt";

export const registerUser = async (body) => {
    const hashedPassword = bcrypt.hashSync(body.password, 10);
    const newUser = new usermodel({
      username: body.username,
      email: body.email,
      password: hashedPassword,
    });
    await newUser.save();
  
  
};
