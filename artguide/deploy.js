const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');


axios.get('http://localhost:3000').then(res => {
    fs.writeFileSync(__dirname + '/index.html', res.data, 'utf-8')
})
axios.get('http://localhost:3000/pages.html').then(res => {
    fs.writeFileSync(__dirname + '/pages.html', res.data, 'utf-8')
})

