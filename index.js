const express = require('express')
const app = express()
const port = 3000

var qr = require('node-qr-image')

app.get('/qr/generate/:code', (req, res) => {
    res.send(qr.imageSync(req.params.code, { type : 'svg', size: '50', ec_level: 'H'}))
})
app.listen(port, () => console.log(`QR started ${port}!`))