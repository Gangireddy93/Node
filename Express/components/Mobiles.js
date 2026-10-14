const express = require("express");
const router = express.Router();

const {
  getmobile,
  createmobile,
  updatemobile,
  deletemobile,
} = require("../Logic Code/Mobilelogic");

router.get("/", getmobile);

router.post("/", createmobile);

router.put("/", updatemobile);

router.delete("/", deletemobile);

module.exports = router;
