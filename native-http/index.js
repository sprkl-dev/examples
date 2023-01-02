const http = require('http')

const server = http.createServer((req, res) => {
  console.log({ msg: 'Handling an http request.', path: req.url })
  // console.log({ msg: 'Testing Sprkl.'}) // Uncomment me :), then run `sprkl -- node index.js`
  res.write(JSON.stringify({ Hello: 'World' }))
  res.end()
})

const PORT = process.env.PORT ?? 3000

server.listen(PORT, () => {
  console.log({ msg: 'Server is listening.', port: PORT })
})
