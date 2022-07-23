//handle-markdown.js

import fs from 'fs';
import glob from "glob";
import fm from "front-matter";
import {remark} from "remark";
import html from "remark-html";
import rehypePrism from "@mapbox/rehype-prism";
import {rehype} from "rehype";

/**
 * import all markdown files in specified path, extract front matter and convert to html
 * @param {string} markdownPath path to folder containing the markdown files (ends on /)
 * @returns [{path, attributes, body}]
 */
export function importMarkdowns(markdownPath) {
    let fileNames = glob.sync(`${markdownPath}*.md`);
    return fileNames.map((path) => convertMarkdown(path))
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns 
 */
export function convertMarkdown(path) {
    let file = fs.readFileSync(path, 'utf8');

    let { attributes, body } = fm(file);
    let result = remark().use(html).processSync(body).value
    result = rehype().use(rehypePrism).processSync(result).value
    const retValue =  { path, attributes, html: result};
    return retValue
}
export function convertToPostPreview(object) {
    const url = object.path.replace(".md","").replace("src/", "");
    return {...object.attributes, url};
}