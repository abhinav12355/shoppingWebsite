const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('./forms/user');
const config=require('./config');

module.exports=function(passport)
{
    let opts={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>
    {
        User.getUserById(jwt_payload._id,(err,user)=>
        {
           if(err)
           {
               return done(error,false)
           } 
           if(user)
           {
               return done(null,user);
           }
           else
           {
               return done(null,false);
           }
        });
    }));

}