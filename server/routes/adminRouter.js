const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authAdmin");
const Admin = require("../models/adminModel");

router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const admin = await Admin.findOne({ email: email });
    if (!admin)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
 
    const JWT_SECRET='*e>xn8f?994tn>gen5gQL;'
    const token = jwt.sign({ id: admin._id },JWT_SECRET);
    res.json({
       token,
      admin: {
        id: admin._id,
        displayName: admin.displayName,
        email: admin.email,
        type: admin.type
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/addadmin", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, type } = req.body;
    console.log('req.body',req.body);
    
    //validate
    if (!email || !password || !passwordCheck || !displayName )
    return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    const existingAdmin = await Admin.findOne({ email: email });
    if (existingAdmin)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      email,
      password: passwordHash,
      displayName,
      type,
    });
    const savedAdmin = await newAdmin.save();
    res.json(savedAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/updateadmin/:id", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, type } = req.body;
    console.log('req.body',req.body);
    
    //validate
    if (!email || !password || !passwordCheck || !displayName )
    return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    const existingAdmin = await Admin.findOne({ email: email });
    
    const existingAdmin1 = await Admin.findOne(
      {id:req.params.id},
      {email:email}
    )
    if (existingAdmin1==existingAdmin)
    {
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
      }
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const updateAdmin = await Admin.updateOne(
      {id: req.params.id},
      {$set:{email: email,
        password: passwordHash,
        displayName: displayName,
        type:type} }
      // email,
      // password: passwordHash,
      // displayName,
      // type,
    );
    res.json(updateAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValidAdmin", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const admin = await Admin.findById(verified.id);
    if (!admin) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const admin = await Admin.findById(req.admin);
  res.json({
    displayName: admin.displayName,
    id: admin._id,
  });
});

module.exports = router;
