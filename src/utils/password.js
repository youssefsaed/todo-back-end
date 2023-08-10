import bcrypt from 'bcryptjs'
export class Password {
    constructor(orignalPass) {
        this.password = orignalPass
    }

    hash() {
        return bcrypt.hashSync(this.password, +process.env.SALT_ROUNDS)
    }
    compare(hashedPass) {
        return bcrypt.compareSync(this.password, hashedPass)
    }
}