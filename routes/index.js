const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success(200)",
    message: "伺服器運作中"
  });
});

module.exports = router;
