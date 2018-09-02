var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy
//, User = require('../../models/user')
import User from '../../models/user'
import { Strategy as GoogleStrategy } from 'passport-google'

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(email, password, done) {
    console.log('LocalStrategy', email, password)
    console.log(typeof User)
    User.findOne({where:{email : email}})
    .then((user)=>{
      if(password == user.password){
        console.log('matched password')
        return done(null,user)
      }
      return done(null,false, {message: 'password mistach'})
    })
    .catch((err)=>{
      return done(null, false, { message: err });
    })
  }
));

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3030/auth/google/return',
    realm: 'http://localhost:3030/'
  },
  function(identifier, profile, done) {
    console.log("1) ",identifier ,"\n2)" ,profile)
    done(null,false)
    // User.findByOpenID({ openId: identifier }, function (err, user) {
    //   return done(err, user);
    // });
  }
));


passport.serializeUser(function(user, done) {
  console.log('serializeUser')
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  console.log('deserializeUser')
  User.findOne({where:{email: email}})
  .then((user)=>{
    done(null,user)
  })
  .catch(()=>{
    done(err,false)
  })
});
