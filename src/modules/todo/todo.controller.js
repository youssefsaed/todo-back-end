import { todoModel } from "../../../databases/models/todo.model.js"
import userModel from "../../../databases/models/user.model.js"


export const addTodo = async (req, res) => {
    try {
        const { id } = req.user
        const { title, description } = req.body
        const newtodo = new todoModel({ title, description, createdBy: id })
        const todo = await newtodo.save()
        res.json({ message: "success", todo })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.user
        const { DoId } = req.query
        if (!DoId) return res.json({ message: "to do id is required" })
        const { title, description,status } = req.body
        const updated = await todoModel.updateOne({ createdBy: id, _id: DoId }, { title, description,status })
        if (updated.modifiedCount === 0) return res.json({ message: "to do not found" })
        res.json({ message: "success", updated })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.user
        const { DoId } = req.query
        if (!DoId) return res.json({ message: "to do id is required" })
        const deleted = await todoModel.deleteOne({ createdBy: id, _id: DoId })
        if (deleted.deletedCount === 0) return res.json({ message: "to do not found" })
        res.json({ message: "success", deleted })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}




export const getToDoWithUser = async (req, res) => {
    try {
        const { id } = req.user
        const todo = await todoModel.find({ createdBy: id }).populate([
            {
                path: 'createdBy',
                model: userModel,
                select: 'name age'
            }
        ])
        if (!todo.length) return res.json({ message: "Add new to do" })
        return res.json({ message: "success", todo })
    } catch (error) {
        res.json({ message: "CathError" })
    }

}

export const clearTodo = async (req, res) => {
    try {
        const { id } = req.user
        const deleted = await todoModel.deleteMany({ createdBy: id })
        return res.json({ message: "success", deleted })
    } catch (error) {
        res.json({ message: "CathError" })
    }
}

