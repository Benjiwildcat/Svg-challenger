let SVG = require('./lib/svg')
const fs = require('fs')


let example = new SVG()


fs.writeFile('shape.svg', example.markup, function (err) {
    if (err)
        console.log(err)
})