const express = require("express");
const wordDefinition = require("../controller/controller");
const router = express.Router();

router.route("/api/v1/translator").get(wordDefinition);

module.exports = router;