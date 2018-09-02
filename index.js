import express from 'express';
import database from './src/database'
import initHandlers from './src/handlers'
import bodyParser from 'body-parser'
import initNodeCluster from './cluster'
import passport from 'passport'
import session from 'express-session'
//import SequelizeSession from 'connect-session-sequelize'

const app = express()

app.set('views',__dirname+'/src/views')
app.set('view engine','html')
app.use(bodyParser.json())


// initalize sequelize with session store
//var SequelizeStore = SequelizeSession(session.Store);
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var sessionStore = new SequelizeStore({
	db: database
})
sessionStore.sync()
//to use passport.js session fisrt use express-session
app.use(session({
	secret:'cats',
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());


database.authenticate().then((success)=>{
	console.log('success -> ', success)
	initHandlers(app)
	initNodeCluster(app)

}).catch((err)=>{
	console.log('error -> ', err)
})
