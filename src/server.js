import express from "express"
import cors from "cors"
import { connectDB } from "./db/index.js"

const server = express()

const { PORT = 3005 } = process.env

server.use(cors())

server.use(express.json())


server.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is listening on port ${PORT}`)
})

server.on("error", (error) => {
    console.log("Server is stopped ", error)
})