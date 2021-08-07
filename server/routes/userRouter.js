const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const crypto = require("crypto");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "",
    },
  })
);

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, address, phoneNumber } =
      req.body;

    // validate

    if (!email || !password || !passwordCheck || !address || !phoneNumber)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      address,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ msg: "Please check again your email or password" });

    const JWT_SECRET = '*e>xn8f?994tn>gen5gQL;Nt"pdpjDVM5Q8[7"3a@_T}<69z[K';
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/adduser", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, address, phoneNumber } =
      req.body;

    //validate
    if (
      !email ||
      !password ||
      !passwordCheck ||
      !displayName ||
      !address ||
      !phoneNumber
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      address,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/updateuser/:id", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, address, phoneNumber } =
      req.body;

    //validate
    if (
      !email ||
      !password ||
      !passwordCheck ||
      !displayName ||
      !address ||
      !phoneNumber
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    const existingUser = await User.findOne({ email: email });

    const existingUser1 = await User.findOne(
      { id: req.params.id },
      { email: email }
    );
    if (existingUser1 == existingUser) {
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
    }
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const updateUser = await User.updateOne(
      { id: req.params.id },
      {
        $set: {
          email: email,
          password: passwordHash,
          displayName: displayName,
          address: address,
          phoneNumber: phoneNumber,
        },
      }
      // email,
      // password: passwordHash,
      // displayName,
      // type,
    );
    res.json(updateUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/changepassword/:_id", async (req, res) => {
  try {
    let { email, password, newpassword, reenternewpassword } = req.body;
    const user = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, user.password);

    //validate
    if (!email || !password || !newpassword || !reenternewpassword)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (!isMatch)
      return res.status(400).json({ msg: "Current password incorrect" });
    if (newpassword.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (newpassword !== reenternewpassword)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const salt = await bcrypt.genSalt();
    const newpasswordHash = await bcrypt.hash(newpassword, salt);

    const updateUser = await User.updateOne(
      { _id: req.params._id },
      { $set: { email: email, password: newpasswordHash } }
    );
    res.json(updateUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/resetpassword", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(422).json({ msg: "User don't exists" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "khanh451754@gmail.com",
          subject: "password reset",
          html: `
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="https://localhost:3001/reset/${token}">link</a> to reset password</h5>
                  `,
        });

        res.json({ message: "check your email" });
      });
    });
  });
});

router.post("/newpassword", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ msg: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;
