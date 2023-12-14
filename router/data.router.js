const { getInputData, createFormData, getUserFormData, getAllFormData } = require("../controllers/data.controllers"); 
  

const router = require("express").Router();

router.route('/form').post(createFormData);   
router.route('/input').get(getInputData);    
router.route('/form/:email').get(getUserFormData);    
router.route('/form_all').get(getAllFormData);    

 
 
 

module.exports = router;