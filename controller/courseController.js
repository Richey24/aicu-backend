const User = require('../model/User')

const registerCourse = async (req, res) => {
    let { course, id } = req.body
    let mainUser = await User.findById(id)
    let user = await User.findOneAndUpdate({ _id: id }, {
        course: [...mainUser.course, course]
    })
    res.status(200).json(user)
}

module.exports = registerCourse