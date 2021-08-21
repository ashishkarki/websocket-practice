console.log('This client will call the WS server')

const ws = new WebSocket("ws://localhost:8088")

ws.addEventListener('open', () => {
    console.log(`This client is connected to WS Server-side`)

    ws.send('Hey how is it going Server?')
})

ws.addEventListener('message', messageEvent => {
    console.log(`data received from server into the client: ${ messageEvent.data }`)
})