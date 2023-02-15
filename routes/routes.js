const express = require("express");

const router = express.Router();

const Model = require("../models/models");
const LocationModel = require("../models/location");
const UserModel = require("../models/user");

// CREATE USER
router.post("/create/user",  (req, res) => {
  const data_location = new LocationModel({
    // Street, city, state, pincode
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
  });
  // try {
  data_location.save((err, loc_doc) => {
    if (err) {
       res.json({ 
            success: false, 
            message: `Data Location ${err}`
        });
    }
    const data_user = new UserModel({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      location: loc_doc._id,
      volunteer: req.body.volunteer,
      type: req.body.type,
      account_created_date: new Date(),
    });
    console.log(data_user);
    data_user.save(async(err, doc) => {
      if (err) {
        await LocationModel.findByIdAndDelete(loc_doc._id);
        return res.json({ 
            success: false, 
            message: `Data User ${err}` 
        });
      }

       res.json({
            success: true,
            message: "New User Created",
            token: doc._id,
        });
    });
    //  return res.json({
    //     success:true, message:"Location Submitted",
    //     token: doc._id
    // })
//     res.json({
//      success: "Account Created",
//    });
  });
  // Location ID from Location Table
  // console.log(token)

  // }
  // catch (error) {
  //     console.log("Last Err "+error);
  //     res.status(400).json({message: error.message})
  // }
});

// PRACTISE PURPOSE -------------------------------------------------------

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    // console.log(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
