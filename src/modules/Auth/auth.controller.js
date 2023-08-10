import userModel from "../../../databases/models/user.model.js";
import { Jwt } from "../../utils/jwt.js";
import { Password } from "../../utils/password.js";



export const SignUp = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, age } = req.body
        if (password != confirmPassword) return res.json({ message: "incorrect password" })
        const exist = await userModel.findOne({ email })
        if (exist) { return res.json({ message: "email is exist" }) }
        const hashPassword = new Password(password).hash()
        const newuser = new userModel({ name, email, password: hashPassword, age })
        const user = await newuser.save()
        res.json({ message: "success", user })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) return res.json({ message: "email not exist" })
        const check = new Password(password).compare(user.password)
        if (!check) return res.json({ message: "incorrect password" })
        const token = new Jwt({ id: user._id, name: user.name, islogedIn: true }).sign()
        res.json({ message: "success", token })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}
