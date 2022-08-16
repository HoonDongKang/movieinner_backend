//회원가입 API
import bcrypt from 'bcrypt'
import { DbConnection } from '../modules/connect'

//회원가입
const signup = async (params: any, connection: DbConnection) => {
    const { email, password, image_URL, name, gender, birth, nickname } = params
    const salt = await bcrypt.genSalt(10)
    const hashedPw = await bcrypt.hash(password, salt)
    await connection.run(
        `INSERT INTO user_info(email,password,image_URL,name,gender,birth,nickname) VALUES(?,?,?,?,?,?,?)`,
        [email, hashedPw, image_URL, name, gender, birth, nickname]
    )
    return {
        status: 201,
        data: { success: true },
    }
}

export default {
    signup,
}
