const jdown = require('jdown') // parses a folder of markdown files into objects. very handy!

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
  const content = await jdown('content', {
    // so that markdown images show nicely
    assets: {
      output: './static/jdown-assets',
      path: '/jdown-assets',
    },
  })
  const color = content.color
  const index = [] // build up array of objects for the top level list
  Object.entries(color).forEach(([k, v]) => {
    v.slug = k
    index.push({
      title: v.title,
      slug: k,
    })
  })
  return {
    index,
    ...color,
  }
}
