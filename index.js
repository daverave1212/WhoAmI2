

const express	= require('express')
const cors		= require('cors')
const app		= express()
const path		= require('path')
const utils		= require('./utils.js')
const router	= express.Router()
var   port		= process.env.PORT || 3000
app.use(cors())	// Makes it cross-origin something

const FAIL		= false
const OK		= true

var hasGameStarted = false
var hasGameEnded = false
var Players = []

Players = [
	{name:'Dave', entry:'Parmezaneer'},
	{name:'Ana', entry:'Hunter'},
	{name:'Calin', entry:'Marmotar'},
	{name:'Mircea', entry:'Pirat'}
]

// Add player and entry
app.post('/game/addplayer', (req, res)=>{
	if(req.query.name == null || req.query.entry == null){
		res.send(FAIL)
	} else {
		let newPlayer = {
			name : req.query.name,
			entry : req.query.entry,
			role : null
		}
		Players.push(newPlayer)
		res.send(OK)
	}
})

// Start game
app.post('/game/start', (req, res)=>{
	if(hasGameStarted || hasGameEnded){
		res.send(FAIL)
	} else if(Players.length < 2){
		res.send(FAIL)
	} else {
		console.log("Starting game")
		for(let i = 1; i<Players.length; i++){
			Players[i].role = Players[i-1].entry
		}
		Players[0].role = Players[Players.length - 1].entry
		hasGameStarted = true
		hasGameEnded = false
		res.send(OK)
	}
})

//app.post('/game/whoami', (req, res)=>{
//	if(req.query.name == null || !hasGameStarted){
//		res.send(FAIL)
//	} else {
//		let otherPlayers = []
//		for(let i = 0; i<Players.length; i++){
//			if(Players[i].name != req.query.name){
//				otherPlayers.push({
//					name : Players[i].name,
//					role : Players[i].role
//				})
//			}
//		}
//		res.send(otherPlayers)
//		console.log(otherPlayers)
//	}
//})

app.post('/game/reset', (req, res)=>{
	Players = []
	hasGameStarted = false
	res.send(OK)
})
   .get('/game/reset', (req, res)=>{
	Players = []
	hasGameStarted = false
	res.send(OK)
})

app.get('/game/ready', (req, res)=>{
	res.send(hasGameStarted)
})
   .post('/game/ready', (req, res)=>{
	res.send(hasGameStarted)
})
	
app.get('/game/ended', (req, res)=>{
	res.send(hasGameEnded)
})
   .post('/game/ended', (req, res)=>{
	res.send(hasGameEnded)
})
	


app.get('/info', (req, res)=>{
	res.send(Players)
}) .post('/info', (req, res)=>{
	res.send(Players)
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