const User = require('../model/User')

const completeRegister = async (req, res) => {
    let { country, state, number, church, id } = req.body

    let user = await User.findOneAndUpdate({ _id: id }, {
        country: country,
        state: state,
        number: number,
        church: church
    })
    res.status(200).json(user)
}

module.exports = completeRegister