console.log("line 1")
import express from "express"
import cors from "cors"
import { useMysql } from "./src/middlewares/dbConnect"
import { registerAllApis } from "./src/controllers"
import { apiConfigs } from "./src/configs/api"
import router from "./src/apis/image"
import { errorHandler } from "./src/middlewares/errorHandler"
import cookieParser from "cookie-parser"

console.log("line 9")

const app = express()
const PORT = 3714

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ credentials: true, origin: true }))
app.use(useMysql)
app.use(cookieParser())

app.use("/image", router)
console.log("image")
registerAllApis(app, apiConfigs)
    .then(() => {
        app.use(errorHandler)
        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        })
    })
    .catch((e) => {
        console.error(e)
        process.exit(-1)
    })
console.log("all apis")
