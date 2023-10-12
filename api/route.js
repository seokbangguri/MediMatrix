const express = require("express");
const router = express.Router();
const { signup, signin, loadUserData, updateData, updatePassword } = require("./controllers/userController");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/setting", loadUserData);
router.post("/updatedata", updateData);
router.post("/updatepw", updatePassword);

module.exports = router;
