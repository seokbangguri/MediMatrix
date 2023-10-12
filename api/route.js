const express = require("express");
const router = express.Router();
const { signup, signin, loadUserData, updateData, updatePassword } = require("./controllers/userController");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/setting", loadUserData);
router.post("/updatedata", updateData);
router.post("/updatepw", updatePassword);

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
  });
  
module.exports = router;
