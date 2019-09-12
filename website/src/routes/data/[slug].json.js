const { getData } = require('../../../ssg.config')

export async function get(req, res) {
  const { slug } = req.params
  const data = await getData()
  if (data[slug]) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data[slug]))
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: `Not found` }))
  }
}
