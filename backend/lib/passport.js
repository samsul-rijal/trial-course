// require('dotenv').config(); // harus di import di main index.js
const {User} = require("../models")
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}, async (payload, done) => {
    try {
      
        const user = await User.findByPk(payload.id);
        if(!user){
            // res.status(404).json({
            //     code: 404,
            //     message: `user not found`
            // });
            console.log('user not found');
            return done(null, false)
        }

        const userAvail = {
            id: user.id,
            name: user.name,
            email: user.email
        }

        // dia akan masuk ke req.user
        return done(null, userAvail)



    } catch (error) {
        console.log(error);
        return done(null, false)        
    }
}))

module.exports = passport