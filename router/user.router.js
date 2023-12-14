const {
  createUser,
  getUser,
  getAllUser,  
} = require("../controllers/user.controllers"); 
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route("/signup").post(createUser);
router.route("/login").post(getUser); 
router.route("/getByAllAuthor").get(verifyToken, getAllUser); 


module.exports = router;
