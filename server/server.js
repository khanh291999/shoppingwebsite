//Import npm packages
const Admin = require("./models/adminModel");
const User = require("./models/userModel");
const express = require("express");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./config/keys");
const { post } = require("./routes/userRouter");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI =
  "mongodb+srv://khanh:khanh123@rest.ycmu9.mongodb.net/khanh?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!!");
});
//Schema
const Schema = mongoose.Schema;
//Opinion
const opinionSchema = mongoose.Schema({
  username: String,
  email: String,
  address: String,
  opinion: String,
});

const CartSchema = new Schema({
  name: String,
  address: String,
  phone_number: String,
  id: Number,
  product: Array,
  userid: String,
  status: String,
  date: String,
  time: String,
  paypalstatus: String,
  editedby: String,
  shippingfee: Number,
  total: Number,
  allTotal: Number,
});
CartSchema.plugin(AutoIncrement, { id: "id_cart", inc_field: "id" });
// const AdminSchema = new Schema({
//     id:Number,
//     username:String,
//     password:String
// })

const DisableJacketSchema = new mongoose.Schema({
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const DisableJeanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const DisableTshirtSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const DisableFemaleJacketSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const DisableFemaleJeanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const DisableFemaleTshirtSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

const PaypalSchema = new mongoose.Schema({
  orderID: Object,
});

//allproducts
const AllProductSchema = new Schema({
  name: String,
  image: Array,
  price: Number,
  size: Array,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

//product
const ProductSchema = new Schema({
  name: String,
  image: Array,
  price: Number,
  size: Array,
  category: String,
  sex: Number,
  S: Number,
  M: Number,
  L: Number,
  XL: Number,
  XXL: Number,
});

//Model
const Opinion = mongoose.model("opinion", opinionSchema);
const Cart = mongoose.model("cart", CartSchema);
const DisableJacket = mongoose.model("disablejacket", DisableJacketSchema);
const DisableJean = mongoose.model("disablejean", DisableJeanSchema);
const DisableTshirt = mongoose.model("disablet-shirt", DisableTshirtSchema);
const DisableFemaleJacket = mongoose.model(
  "disablefemalejacket",
  DisableFemaleJacketSchema
);
const DisableFemaleJean = mongoose.model(
  "disablefemalejean",
  DisableFemaleJeanSchema
);
const DisableFemaleTshirt = mongoose.model(
  "disablefemalet-shirt",
  DisableFemaleTshirtSchema
);
const Paypal = mongoose.model("paypal", PaypalSchema);
const Product = mongoose.model("product", ProductSchema);
//Saving data to our mongo database
const data = {};

// instance of the model
const newCart = new Cart(data);
const newDisableJacket = new DisableJacket(data);
const newDisableJean = new DisableJean(data);
const newDisableTshirt = new DisableTshirt(data);
const newDisableFemaleJacket = new DisableFemaleJacket(data);
const newDisableFemaleJean = new DisableFemaleJean(data);
const newDisableFemaleTshirt = new DisableFemaleTshirt(data);
const newAdmin = new Admin(data);
const newPaypal = new Paypal(data);
const newProduct = new Product(data);

//HTTP request logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use("/users", require("./routes/userRouter"));
app.use("/admins", require("./routes/adminRouter"));
app.use("/api/dialogflow", require("./routes/dialogflow"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//Opinion
app.get("/opinion", (req, res) => {
  const data = {};

  Opinion.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/opinion", (req, res) => {
  const data = req.body;

  const newOpinion = new Opinion(data);
  newOpinion.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

//Jacket
app.get("/disablejacket", (req, res) => {
  const data = {};

  DisableJacket.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablejacket/:_id", (req, res) => {
  const data = {};
  DisableJacket.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablejacket", (req, res) => {
  const data = req.body;

  const newDisableJacket = new DisableJacket(data);
  newDisableJacket.save((error) => {
    if (error) {
      console.error("error: ", error);
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablejacket/:_id", async (req, res) => {
  try {
    const removedPost = await DisableJacket.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Jean
app.get("/disablejean", (req, res) => {
  const data = {};

  DisableJean.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablejean/:_id", (req, res) => {
  const data = {};
  DisableJean.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablejean", (req, res) => {
  const data = req.body;

  const newDisableJean = new DisableJean(data);
  newDisableJean.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablejean/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await DisableJean.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//T-shirt
app.get("/disablet-shirt", (req, res) => {
  const data = {};

  DisableTshirt.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablet-shirt/:_id", (req, res) => {
  const data = {};
  DisableTshirt.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablet-shirt", (req, res) => {
  const data = req.body;

  const newDisableTshirt = new DisableTshirt(data);
  newDisableTshirt.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablet-shirt/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await DisableTshirt.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//FemaleJacket
app.get("/disablefemalejacket", (req, res) => {
  const data = {};

  DisableFemaleJacket.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablefemalejacket/:_id", (req, res) => {
  const data = {};
  DisableFemaleJacket.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablefemalejacket", (req, res) => {
  const data = req.body;

  const newDisableFemaleJacket = new DisableFemaleJacket(data);
  newDisableFemaleJacket.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablefemalejacket/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await DisableFemaleJacket.remove({
      _id: req.params._id,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//FemaleJean
app.get("/disablefemalejean", (req, res) => {
  const data = {};

  DisableFemaleJean.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablefemalejean/:_id", (req, res) => {
  const data = {};
  DisableFemaleJean.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablefemalejean", (req, res) => {
  const data = req.body;

  const newDisableFemaleJean = new DisableFemaleJean(data);
  newDisableFemaleJean.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablefemalejean/:_id", async (req, res) => {
  try {
    const removedPost = await DisableFemaleJean.remove({
      _id: req.params._id,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//FemaleT-shirt
app.get("/disablefemalet-shirt", (req, res) => {
  const data = {};

  DisableFemaleTshirt.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/disablefemalet-shirt/:_id", (req, res) => {
  const data = {};
  DisableFemaleTshirt.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/disablefemalet-shirt", (req, res) => {
  const data = req.body;

  const newDisableFemaleTshirt = new DisableFemaleTshirt(data);
  newDisableFemaleTshirt.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/disablefemalet-shirt/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await DisableFemaleTshirt.remove({
      _id: req.params._id,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Cart
app.get("/cart", (req, res) => {
  const data = {};
  Cart.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/cart", (req, res) => {
  const data = req.body;

  const newCart = new Cart(data);
  newCart.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.patch("/cart/:id", async (req, res) => {
  try {
    const updatePost = await Cart.updateOne(
      { id: req.params.id },
      { $set: { status: req.body.status, editedby: req.body.editedby } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//paypal
app.get("/paypal", (req, res) => {
  const data = {};

  Paypal.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/paypal/:id", (req, res) => {
  const data = {};
  Paypal.findOne({
    id: req.params.id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/paypal", (req, res) => {
  const data = req.body;

  const newPaypal = new Paypal(data);
  newPaypal.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

//admin
app.get("/admin", (req, res) => {
  const data = {};

  Admin.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/admin/:id", (req, res) => {
  const data = {};
  Admin.findOne({
    id: req.params.id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/admin", (req, res) => {
  const data = req.body;

  const newAdmin = new Admin(data);
  newAdmin.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/admin/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await Admin.remove({ id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

app.patch("/admin/:id", async (req, res) => {
  try {
    const updatePost = await Admin.updateOne(
      { id: req.params.id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          image: req.body.image,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//user
app.get("/user", (req, res) => {
  const data = {};

  User.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/user/:id", (req, res) => {
  const data = {};
  User.findOne({
    id: req.params.id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/user", (req, res) => {
  const data = req.body;

  const newUser = new User(data);
  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/user/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await User.remove({ id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

app.patch("/user/:_id", async (req, res) => {
  try {
    const updatePost = await User.updateOne(
      { _id: req.params._id },
      {
        $set: {
          email: req.body.email,
          displayName: req.body.displayName,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Product
app.get("/product", (req, res) => {
  const data = {};
  Product.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.get("/product/:_id", (req, res) => {
  const data = {};
  Product.findOne({
    _id: req.params._id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/product", (req, res) => {
  const data = req.body;

  const newProduct = new Product(data);
  newProduct.save((error) => {
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

app.delete("/product/:_id", async (req, res) => {
  try {
    const removedPost = await Product.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

app.patch("/product/:_id", async (req, res) => {
  try {
    const updatePost = await Product.updateOne(
      { _id: req.params._id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          image: req.body.image,
          sex: req.body.sex,
          category: req.body.category,
          S: req.body.S,
          M: req.body.M,
          L: req.body.L,
          XL: req.body.XL,
          XXL: req.body.XXL,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

app.listen(PORT, console.log(`Sever is starting at ${PORT}`));
