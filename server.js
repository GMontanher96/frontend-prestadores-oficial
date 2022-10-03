const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(__dirname));
app.use(express.static(join(__dirname, 'build')));

app.listen(process.env.PORT || 3000, (err) => {
    if (err) { return console.log(err) }

    console.log("Frontend funcionando com sucesso!")
})