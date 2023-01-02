const http = require('http')

const server = http.createServer((req, res) => {
  console.log({ msg: 'Handling an http request.', path: req.url })
  // throw new Error(JSON.stringify({ msg: 'Testing Sprkl.'})) // Uncomment me :), then run `sprkl -- node index.js`
  res.write(JSON.stringify({ Hello: 'World' }))
  res.end()
})

server.listen(3000, () => console.log({ msg: 'Server is listening.', port: 3000 }))