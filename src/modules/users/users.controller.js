import userModel from "../../../databases/models/user.model.js";
import { Password } from "../../utils/password.js";
export const getUser = async (req, res) => {
    try {
        const { id } = req.user
        const user = await userModel.findById(id)
        res.json({ message: "success", user })
    } catch (error) {
        console.log(error);
        res.json({ message: "catch error" })
    }
}
export const updateUser = async (req, res) => {
    try {
        const { name, password, email, age } = req.body
        const { id } = req.user
        const exist = await userModel.findOne({ email })
        if (exist && email) return res.json({ message: "email is exist change your email" })
        const npassword= new Password(password).hash()
        const updated = await userModel.updateOne({ _id: id }, { name, password:npassword, email, age })
        res.json({ message: "success", updated })
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.user
        const deleted = await userModel.deleteOne({ _id: id })
        res.json({ message: "success", deleted })
    } catch (error) {
        console.log(error);
    }
}