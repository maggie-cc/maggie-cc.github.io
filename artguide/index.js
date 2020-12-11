//use express to build together the pages based on parts (layout and all the pages)
const express = require('express'); //loading in the express package
const layouts = require('express-ejs-layouts');//load template engine
const app = express(); //execute express and find the variable app


app.set('view engine', 'ejs'); //set the view engine to view as ejs
app.use(layouts);//pass in ejs packet
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

