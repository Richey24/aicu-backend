const User = require('../model/User')

const deleteUser = async (req, res) => {
    let { email } = req.body

    let user = await User.deleteOne({ email: email })

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(401).json({ message: "User Not Found" })
    }
}

module.exports = deleteUser