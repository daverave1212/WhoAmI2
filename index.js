

const express	= require('express')
const cors		= require('cors')
const app		= express()
const path		= require('path')
const utils		= require('/utils')
const router	= express.Router()
var   port		= process.env.PORT || 3000
app.use(cors())	// Makes it cross-origin something

const FAIL		= false;
const OK		= true;

var Players = []

// Add player
app.post('/game', (req, res)=>{
	if(req.query.name == null){
		res.send(FAIL)
	} else {
		let newPlayer = {
			name : req.query.name,
			entry : null,
			role : null
		}
		Players.push(newPlayer)
		res.send(OK)
	}
})

// Add entry
app.put('/game', (req, res)=>{
	if(req.query.name == null || req.query.entry == null){
		res.send(FAIL)
	} else {
		let playerIndex = utils.findInArray(Players, 'name', req.query.name);
		if(playerIndex == null){
			res.send(FAIL)
		} else {
			Players[index].entry = req.query.entry
			res.send(OK)
		}
	}
})

// Start game
app.post('start'), (req, res)=>{
	if(Players.length < 2){
		res.send(FAIL)
	} else {
		for(let i = 1; i<Players.length; i++){
			Players[i].role = Players[i-1].entry
		}
		Players[0].role = Players[Players.length - 1].entry
		res.send(OK)
	}
})


app.listen(port, ()=>{
	console.log(`Listening on port ${port}...`)
})

















/*
// REMINDER: When you make requests, always include the link with http:// in fata!

// Just sends this
app.get('/', (request, response) => {
	response.send('Hello World')
})

// When this page is accessed, return the index.html file
app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
})

// When our index.html loads, it requests the style from the same server. That's why we need this
app.get('/style.css', (req, res) => {
	res.sendFile(path.join(__dirname+'/style.css'));
})



app.get('/api/courses', (request, response)=>{
	response.send([1,2,3,4,5,6,2])
})

// Nice littlr trick ;)
app.route('/book')
	.get((req, res) => {
		res.send('Get a random book')
	})
	.post((req, res) => {
		res.send('Add a book')
	})
	.put((req, res) => {
		res.send('Update the book')
	})

'Try /api/courses/dave/21?a=20&b=30'
app.get('/api/courses/:name/:age', (request, response)=>{
	console.log(request.params)	// Params from url as p1/p2/
	console.log(request.query)	// Params from ?a=20&b=30
	if(false)response.send(request.params)
	else response.status(404).send('Something not found :c')
	if(false) response.status(400).send('Bad Request (wrong or incomplete params sent, for example)')
})

app.post('/api/courses', (req, res)=>{
	console.log(req.body)		// Params from post, JSON format
	res.send({"Dingo" : req.body})
})

*/