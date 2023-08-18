import { minioClient } from "../server";

export async function listBuckets() {
    const result = await minioClient.listBuckets()
    console.log(result)
}

export async function postImage() {
    const file = './credentials.json';
    const filename = new Date().toISOString().replace(/:/g, '') + '.json';

    try {
        await minioClient.fPutObject('mantas-bucket', filename, file, { 'Content-Type': 'application/json' });
        console.log(`File ${filename} added to mantas-bucket`);
    } catch (error) {
        console.error('Failed to add image:', error);
    }
}