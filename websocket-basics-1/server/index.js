const Websocket = require('ws')
const stringify = require('json-stringify-safe')

const wss = new Websocket.Server({
    port: 8088
})

// listen for new client connection
wss.on('connection', singleWsConnection => {
    console.log(`NEW client connected:`)
    console.log(`**************************************`)

    // listen for messages from clients
    singleWsConnection.on('message', data => {
        console.log(`Client has sent data: ${ data }`)

        singleWsConnection.send(data)
    })

    //listen for that client's disconnection/close
    singleWsConnection.on('close', () => {
        console.log(`single client ${ singleWsConnection } has disconnected!!`)
        console.log(`**************************************`)
    })
})

