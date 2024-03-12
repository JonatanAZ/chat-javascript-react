import Chat from "./models/Chat.js"

export default io => {

    let users = {}

    io.on('connection', async socket => {

        socket.on('new user', (user, cb) => {
            if(user in users){
                cb(false)
            } else {
                cb(true)
            }
        })

        socket.on('username', user => {
                socket.nickname = user
                users[socket.nickname] = socket
                updateNickanmes()
        })

        socket.on('message', async msg => {

            let newMsg = Chat({
                msg,
                nick: socket.nickname
            })

            await newMsg.save()

            io.sockets.emit('new message', {
                msg,
                nick: socket.nickname
            })
        })

        socket.on('disconnect', data => {
            if(!socket.nickname) return
            delete users[socket.nickname]
            updateNickanmes()
        })

        function updateNickanmes(){
            io.sockets.emit('usernames', Object.keys(users))
        }
    })
}