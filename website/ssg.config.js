// const jdown = require('jdown') // parses a folder of markdown files into objects. very handy!
// const content = await jdown('content', {
//   // so that markdown images show nicely
//   assets: {
//     output: './static/jdown-assets',
//     path: '/jdown-assets',
//   },
// })
// const color = content.color
// const index = [] // build up array of objects for the top level list
// Object.entries(color).forEach(([k, v]) => {
//   v.slug = k
//   index.push({
//     title: v.title,
//     slug: k,
//   })
// })
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const slugify = require('slugify')
/**
 *
 * Customize this file however you like
 *
 * only requirement: export an async function getData() that returns a data  object
 *
 * will be imported by src/routes/data/[slug].json
 * `key` of foo = your page calls `this.fetch('data/foo.json')`
 * will be stringified so no complex functions or whatever in your object
 */

exports.getData = async () => {
  const index = {}
  const color = loadYaml('content/color.yml')
  index.color = filterDataArray(color, { filterForFields: 'title,slug,image'.split(',') })
  const css = loadYaml('content/css.yml')
  index.css = filterDataArray(css, { filterForFields: 'title,slug,image'.split(',') })

  const data = { index, ...extractSlugObjectFromArray(css), ...extractSlugObjectFromArray(color) }
  return data
}

function extractSlugObjectFromArray(arr) {
  let obj = {}
  arr.forEach((item) => (obj[item.slug] = item))
  return obj
}

function loadYaml(ymlpath, opts) {
  const fullData = yaml.safeLoad(fs.readFileSync(path.resolve(ymlpath), 'utf8'))
  let filteredData = fullData
  if (Array.isArray(fullData) && fullData.length && fullData[0].title) {
    // enrich with slug
    fullData.forEach((col, i) => {
      col.slug = col.title ? slugify(col.title) : slugify(ymlpath) + i
    })
  }
  return fullData
}

function filterDataArray(fullData, opts) {
  let filteredData = fullData
  if (opts.filterForFields && Array.isArray(opts.filterForFields)) {
    filteredData = []
    fullData.forEach((item, i) => {
      const newItem = {}
      opts.filterForFields.forEach((field) => {
        newItem[field] = item[field]
      })
      filteredData.push(newItem)
    })
  }
  return filteredData
}
