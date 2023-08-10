import userModel from "../databases/models/user.model.js"
import { Jwt } from "../src/utils/jwt.js"


export const Auth = () => {
    return async (req, res, next) => {
        try {
            const { authorization } = req.headers
            if (!authorization)
                return res.json({ message: "token must be provided" })
            if (!authorization.startsWith(process.env.BEARER))
                return res.json({ message: "bearer must be provided" })
            const token = authorization.split('__')[1]
            const decoded = new Jwt().verify(token)
            if (!decoded?.id || !decoded?.islogedIn)
                return res.json({ message: "Invalid Token payload" })
            const user = await userModel.findById(decoded.id)
            if (!user) return res.json({ meessage: "user not found" })
            req.user = user
            
            next()
        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

