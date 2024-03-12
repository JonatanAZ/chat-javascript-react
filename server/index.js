import http from 'http'
import app from './app.js'
import { Server } from 'socket.io'
import sockets from './sockets.js'
import './database.js'

const server = new http.createServer(app)

const io = new Server(server)

sockets(io)

server.listen(3000)
console.log('Server on port', 3000)