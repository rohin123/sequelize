import User from '../../models/user'
import sequelize from '../../database'
import passport from 'passport'

class UserHandler {
  showAllUsers(req,res,next){
    User.findAll()
    .then(users=>{
      res.status(200)
      res.send(users)
    })
    .catch((err)=>{
      res.status(400)
      res.send(err)
    })
  }

  createUsers(req,res,next){
      console.log(req.body)
      const {firstName,lastName,email,password} = req.body
      console.log(firstName,lastName,email,password)
      User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      .then((success)=>{
        res.status(200)
        res.send(success)
      })
      .catch((err)=>{
        res.status(400)
        res.send(err)
      })
  }

  test(req,res,next){
    sequelize.query('select 1 as `foo.bar.baz`').then(rows => {
      console.log(JSON.stringify(rows))
      res.send(JSON.stringify(rows))
    })
  }

  login(req,res,next){
    res.status(200)
    res.send("hello");
  }

  auth(req,res,next){
    if(req.isAuthenticated()){
      console.log('authorized')
      next()
    }else{
      res.status(401)
      res.send('Not authorized')
    }
  }


  init(app){
        app.get('/api/users',this.auth,this.showAllUsers)
        app.get('/api/test',this.test)
        app.post('/api/users',this.auth,this.createUsers)
        app.post('/api/login', (req,res,next)=>{console.log('/api/login'); next()}
                             , passport.authenticate('local',{session: true})
                             , this.login)
  }
}

export default new UserHandler()
