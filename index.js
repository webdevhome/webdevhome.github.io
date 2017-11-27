const edge = require('edge.js')
const path = require('path')
const fs = require('fs')
const json5 = require('json5')
const htmlMinifier = require('html-minifier')

edge.registerViews(path.resolve(`${__dirname}/templates`))
const dataString = fs.readFileSync(path.resolve(`${__dirname}/data/sites.json5`))
const data = json5.parse(dataString)
const html = edge.render('index', data)
const minifiedHtml = htmlMinifier.minify(html, {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  removeAttributeQuotes: true,
  removeComments: true
})
fs.writeFileSync(path.resolve(`${__dirname}/docs/index.html`), minifiedHtml)