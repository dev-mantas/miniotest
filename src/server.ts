import express, {Request, Response} from "express"
import cors from "cors"
import * as Minio from 'minio'
import { listBuckets, postImage } from "./services/minio.service"

export const minioClient = new Minio.Client({
    endPoint: "storageapi.begintwenty.com",
    accessKey: "",
    secretKey: ""
})


const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000






listBuckets()
async function uploadImagesSequentially(times: number) {
    for (let i = 0; i < times; i++) {
        await postImage();
    }
}

uploadImagesSequentially(10000);








app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})