const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req,res) => {
    res.send("hello")
  })
  return router;
};