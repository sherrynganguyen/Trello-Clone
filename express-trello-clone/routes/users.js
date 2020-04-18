const router = require("express").Router();
const mongoose  = require('mongoose');

const UserModel = mongoose.model("Users")

// const user = {
//   first_name: "Sherry",
//   last_name: "Nguyen",
//   email: "123@123.com",
//   password: "123"
// }
// const newUser = new UserModel(user)
// newUser.save()
router.get("/login", (req,res) => {
  UserModel.find((err,docs) => {
    if (!err) {
      console.log(docs)
      res.json(docs)
    } else {
      res.send(err)
    }
  })
})

module.exports = router;