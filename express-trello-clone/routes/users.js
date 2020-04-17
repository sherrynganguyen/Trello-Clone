const router = require("express").Router();
const mongoose  = require('mongoose');

const UserModel = mongoose.model("Users")
router.get("/login", (req,res) => {
  UserModel.find((err,docs) => {
    if (!err) {
      console.log(docs)
      res.redner("users")
    } else {
      res.send(err)
    }
  })
})

module.exports = router;