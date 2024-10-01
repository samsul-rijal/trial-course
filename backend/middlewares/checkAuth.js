const passport = require('../lib/passport');


const checkAuth = passport.authenticate('jwt', { session: false })


module.exports = checkAuth;