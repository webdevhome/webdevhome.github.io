import fs from 'fs'
import edge from 'edge.js'
import json5 from 'json5'
import htmlMinifier from 'html-minifier'
import simpleIcons from 'simple-icons'
import { getPath } from "./utils";

export async function buildHtml() {
  edge.registerViews(getPath('src/templates'))
  const dataString = fs.readFileSync(getPath('src/data/sites.json5'))
  const data = json5.parse(dataString)
  const html = edge.render('index', { ...data, simpleIcons })
  const minifiedHtml = htmlMinifier.minify(html, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  })
  fs.writeFileSync(getPath('index.html'), minifiedHtml)
}