const express = require('express'); //loading in the express package
const layouts = require('express-ejs-layouts');
const app = express(); //execute express and find the variable app

const fs = require('fs');

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(__dirname));

//should a browser visit this 
app.get('/', (req, res)=>{
    res.render('index', {layout:'layout', title:'dsadfsdfhu'})
    
}) 
app.get('/pages.html', (req, res)=>{
    res.render('carousel', {layout:'layout'});
}) 

//expose the application to the browser
app.listen(3000, () => {
	console.log('running at http://localhost:3000')
})

