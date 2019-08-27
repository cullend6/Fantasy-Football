const User = require('../models/user')

const validateAddUser = async ({ email, password, passwordCheck}) => {
    const emailExists = await emailExistsAlready(email)
    if ( emailExists ) {
        return { valid: false, message: `User already exists.` }
    }

    if (password != passwordCheck) {
        return { valid: false, message: `Passwords don't match.`}
    }

    return { valid: true }
}

const emailExistsAlready = async (email) => {
    const emailCheck = await User.find({ email })
    if (emailCheck.length === 0) {
        return false
    }
    return true
}

module.exports = validateAddUser