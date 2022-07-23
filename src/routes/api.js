// src/routes/index.json.js
import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

export function GET() {
    let postFiles = importMarkdowns("src/posts/")

    let o_posts = postFiles.map((file) => convertToPostPreview(file))

    let body = JSON.stringify(o_posts);

    return {body}
}