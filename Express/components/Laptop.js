const express = require("express");
const router = express.Router();

const {
  getlaptop,
  createlaptop,
  updatelaptop,
  deletelaptop,
} = require("../Logic Code/Laptop logic");
router.get("/", getlaptop);

router.post("/", createlaptop);

router.put("/", updatelaptop);

router.delete("/", deletelaptop);

module.exports = router;
