const CommonSignup = require ("../models/common.signup.model")

const saveUser = async (req, res) => {
    try {
    
      const user = await CommonSignup.findOne({email:req.body.email});
      if (user) {res.status(400).send({ message: "failed"}); } else { 
      const commonSignup = new CommonSignup(req.body);
      const savedCommonSignup = await commonSignup.save();
      if (savedCommonSignup) {
        res.status(201).send({ message: "success", data: savedCommonSignup });
      } else {
        res.status(400).send({ message: "failed", data: savedCommonSignup });
      }
      console.log("result , ", savedCommonSignup);
    }
    } catch (err) {
      console.log("error in CommonSignup ", err);
      res.status(500).send({ message: "failed", data: err });
    }
}
module.exports = {saveUser}