import { convertMarkdown } from "$lib/handle-markdown"

export async function GET({ params }) {
    const {url} = params;
    const post = await convertMarkdown(`src/posts/${url}.md`)
    let body = JSON.stringify(post);
    return { headers: { 'Content-Type': 'application/json' },body}
}