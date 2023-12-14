const sectorModel = require("../models/input.models")
const formModel = require("../models/data.models")


const getInputData = async (req, res) => {
  // console.log("user", req.user);
  try {
    const user = await sectorModel.find({}); 
    return res.status(201).send(user);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
}; 


const createFormData = async (req, res) => {
  try { 
    const data = req.body ;   
    const user = data.user;

    const userExist = await formModel.findOne({ user }); 

    if (userExist) { 
      const data = await formModel.updateOne(
        { user},
        { $set: { name: data.name, sectors: data.sectors, agree: data.agree } }
      ); 

      const update = await formModel.findOne({ user }); 
      return res.status(200).json({
        form: update,
        status: "success",
        message: "Form Data Update success",
      });

    } 

    const form = await formModel.create(data); 
    return res.status(200).json({
      form,
      status: "success",
      message: "Form add success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};


const getUserFormData = async (req, res) => { 
  try {
    const { email} = req.params;
    console.log(email);

    const data = await formModel.findOne({ user: email }); 

      return res.status(200).send({
        status: "success", 
        form: data,
        message: "User Login Successful",
      });
 
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
}; 

const getAllFormData = async (req, res) => { 
  try {
    const form = await formModel.find({});

    return res.status(201).send(form);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
}; 

 
 
 

module.exports = { 
    getInputData,  
    createFormData,
    getUserFormData,
    getAllFormData
};