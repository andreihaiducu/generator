const express = require('express')
const app = express()
const port = 3000

var qr = require('node-qr-image')

app.get('/qr/svg/:code', (req, res) => {
    res.send(qr.imageSync(req.params.code, { type: 'svg', size: '50', ec_level: 'H' }))
})
app.get('/qr/png/:code', (req, res) => {
    res.contentType('image/png');
    res.send(qr.imageSync(req.params.code))
})
app.get('/qr/html/:code', (req, res) => {
    var base64 = qr.imageSync(req.params.code).toString('base64')
    res.send(`<p> <img src="data:image/png;base64, ${base64}" style='display:block; width:200px;height:200px;' > </p>`)
})
app.listen(port, () => console.log(`QR started ${port}!`))