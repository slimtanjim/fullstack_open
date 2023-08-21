const http = require('http')

const app = http.createServer((req, response) => {
    response.writeHead(200, {'Content-type': 'text/plain'})
    response.end('Hello World from my server')
})

const PORT = 3005
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
console.log(`http://localhost:${PORT}/`)