const CommonSignup = require ("../models/CommonSignup")

const saveUser = async (req, res) => {
    try {
    
        const commonSignup = new CommonSignup(req.body);
        const savedCommonSignup = await commonSignup.save();
        if (savedCommonSignup) {
          res.status(201).send({ message: "success", data: savedCommonSignup });
        } else {
          res.status(400).send({ message: "failed", data: savedCommonSignup });
        }
        console.log("result , ", savedCommonSignup);
      } catch (err) {
        console.log("error in CommonSignup ", err);
        res.status(500).send({ message: "failed", data: err });
      }
}
module.exports = {saveUser}