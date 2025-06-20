const express = require("express")
const router = express.Router()
const User = require("../models/auth")
const bcrypt = require("bcrypt")


router.post("/singup", (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(422).json({ msg: "please add all the fields" })
    } else {
        User.findOne({ email: email })
            .then(savedUser => {
                if (savedUser) {
                    return res.status(422).json({ mgs: "User already existt" })
                } else {
                    bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            // console.log(hashedPassword);
                            const Usernew = new User({
                                name,
                                email,
                                password: hashedPassword
                            })
                            Usernew.save()
                            res.status(200).json({ msg: "User add successfully" })
                        })
                }

            })
    }


})

module.exports = router