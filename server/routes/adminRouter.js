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
 
    const JWT_SECRET='*e>xn8f?994tn>gen5gQL;Nt"pdpjDVM5Q8[7"3a@_T}<69z[K'
    const token = jwt.sign({ id: admin._id },JWT_SECRET);
    res.json({
       token,
      admin: {
        id: admin._id,
        displayName: admin.displayName,
        email: admin.email
      },
    });
  } catch (err) {
    console.log(err);
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
