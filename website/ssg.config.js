const fs = require('fs')
const path = require('path')

const { loadYaml, filterDataArray, extractSlugObjectFromArray } = require('@ssgjs/source-yaml')
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
