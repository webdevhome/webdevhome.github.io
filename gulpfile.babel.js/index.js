import fs from 'fs'
import path from 'path'
import http from 'http'
import edge from 'edge.js'
import json5 from 'json5'
import htmlMinifier from 'html-minifier'
import simpleIcons from 'simple-icons'
import gulp from 'gulp'
import serveHandler from 'serve-handler'

const folder = it => path.resolve(__dirname, '..', it)

async function build () {
  edge.registerViews(folder('templates'))
  const dataString = fs.readFileSync(folder('data/sites.json5'))
  const data = json5.parse(dataString)
  const html = edge.render('index', { ...data, simpleIcons })
  const minifiedHtml = htmlMinifier.minify(html, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  })
  fs.writeFileSync(folder('index.html'), minifiedHtml)
}

function watch () {
  gulp.watch(['templates/**/*.edge', 'data/**/*.json5'], build)
  return new Promise(() => {})
}

function serve () {
  const port = 3000
  http.createServer((...args) => serveHandler(...args))
    .listen(port, () => { console.log(`running at http://localhost:${port}`) })
  return new Promise(() => {})
}

export const buildTask = build
export const watchTask = watch
export const serveTask = serve
export const devTask = gulp.parallel(serve, watch)