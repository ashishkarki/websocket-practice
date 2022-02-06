const setupSocketMethod1 = () => {
  const io = require('socket.io')()

  io.on('connection', (socket) => {
    console.log('User connected')

    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
  })

  // setup listening port but this doesn't setup a server
  io.adapter(3001)
}

const setupSocketMethod2 = () => {
  const { Server } = require('socket.io')
  const http = require('http')

  // create http server
  const server = http.createServer((req, res) => {
    res.end('hello from socket.io\n')
  })

  // socket.io endpoint/socket
  const io = new Server({
    serveClient: false, // don't send server's lib files to the client
  })

  io.on('connection', (socket) => {
    console.log('Client connected: ' + socket.id)

    socket.on('disconnect', () => {
      console.log('Client disconnected: ' + socket.id)
    })
  })

  // attach io to server and listen on port 3001
  io.attach(server)
  server.listen(3001)
}

setupSocketMethod2()
