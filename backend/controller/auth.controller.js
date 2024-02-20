import usermodel from "../module/user.module.js";
import bcrypt from "bcrypt";
import { registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body)

    res.status(200).json({
      newUser,
      message: "user has been registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occured When Registering User",
    });
  }
};
