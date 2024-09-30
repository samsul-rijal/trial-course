const Joi = require('joi');

const userSchema = Joi.object({
   name: Joi.string().required().messages({
       'string.empty': 'Name is required',
   }),
   email: Joi.string().email().required().messages({
       'string.empty': 'Email is required',
       'string.email': 'Please enter a valid email address',
   }),
   address: Joi.string().required().messages({
       'string.empty': 'Address is required',
   }),
});

// Middleware untuk handle error
const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false }); 
    // Menggunakan abortEarly: false untuk mendapatkan semua kesalahan sekaligus.

    if (error) {
        console.log(error.details); // Log semua detail kesalahan
        return res.status(400).json({ error: error.details.map(err => err.message) });
    }

    next();
}

module.exports = { validateUser };
