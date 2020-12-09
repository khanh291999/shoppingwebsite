//Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const morgan = require('morgan');
const cors = require('cors')
const path = require('path');
const { post } = require('./routes/userRouter');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://khanh:khanh123@rest.ycmu9.mongodb.net/khanh?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!!!!')
})
//Schema
const Schema = mongoose.Schema;
// const BlogPostSchema = new Schema({
//     id:Number,
//     name:String,
//     src:String,
//     price:Number,
//     size:Array,
// });

const CartSchema = new Schema({
     name:String,
     address:String,
     phone_number:String,
     id:String,
     product:Array,
     userid:String,
     status:String
})

// const AdminSchema = new Schema({
//     id:Number,
//     username:String,
//     password:String
// })

const JacketSchema = new mongoose.Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});
JacketSchema.plugin(AutoIncrement, {inc_field: 'id', start_seq:'6'});

const JeanSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});
JeanSchema.plugin(AutoIncrement, {id: 'id_jean',inc_field: 'id', start_seq:'9'});

const TshirtSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const FemaleJacketSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const FemaleJeanSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const FemaleTshirtSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

//Model
// const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const Cart = mongoose.model('cart',CartSchema)
// const Admin = mongoose.model('admin',AdminSchema)
const Jacket = mongoose.model('jacket',JacketSchema)
const Jean = mongoose.model('jean',JeanSchema)
const Tshirt = mongoose.model('t-shirt',TshirtSchema)
const FemaleJacket = mongoose.model('femalejacket',FemaleJacketSchema)
const FemaleJean = mongoose.model('jeanfemale',FemaleJeanSchema)
const FemaleTshirt = mongoose.model('t-shirtfemale',FemaleTshirtSchema)


//Saving data to our mongo database
const data = {
}

// const newBlogPost = new BlogPost(data); 
const newCart = new Cart(data);// instance of the model
// const newAdmin = new Admin(data);
const newJacket = new Jacket(data);
const newJean = new Jean(data)
const newTshirt = new Tshirt(data)
const newFemaleJacket = new FemaleJacket(data);
const newFemaleJean = new FemaleJean(data);
const newFemaleTshirt = new FemaleTshirt(data);

//.save()
// newBlogPost.save((error)=>{
//     if(error){
//         console.log('Ooops, something happened');
//     }else{
//         console.log('Data has been saved!!!')
//     }
// })

//HTTP request logger
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(morgan('tiny'))
app.use("/users", require("./routes/userRouter"));
app.use("/admins", require("./routes/adminRouter"));



app.get('/jacket', (req, res) =>{
    const data = {
    };

    Jacket.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/jacket/:id', (req, res) =>{
    const data = {
    };
    Jacket.findOne({
        id:req.params.id
    })
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/jacket', (req,res)=>{
    const data = req.body;

    const newJacket = new Jacket(data);
    newJacket.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/jacket/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await Jacket.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/jacket/:id', async (req, res)=>{
   try{
       const updatePost = await Jacket.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });



app.get('/jean', (req, res) =>{
    const data = {
    };

    Jean.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/jean/:id', (req, res) =>{
    const data = {
    };
    Jean.findOne({
        id:req.params.id
    })
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/jean', (req,res)=>{
    const data = req.body;

    const newJean = new Jean(data);
    newJean.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/jean/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await Jean.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/jean/:id', async (req, res)=>{
   try{
       const updatePost = await Jean.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });

app.get('/t-shirt', (req, res) =>{
    const data = {
    };

    Tshirt.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/t-shirt/:id', (req, res) =>{
    const data = {
    };
    Tshirt.findOne({
        id:req.params.id
    })
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/femalejacket', (req, res) =>{
    const data = {
    };

    FemaleJacket.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/femalejacket/:id', (req, res) =>{
    const data = {
    };
    FemaleJacket.findOne({
        id:req.params.id
    })
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});



app.get('/femalejean', (req, res) =>{
    const data = {
    };

    FemaleJean.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/femalejean/:id', (req, res) =>{
    const data = {
    };
    FemaleJean.findOne({
        id:req.params.id
    })
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/femalet-shirt', (req, res) =>{
    const data = {
    };

    FemaleTshirt.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/femalet-shirt/:id', (req, res) =>{
    const data = {
    };
    FemaleTshirt.findOne({
        id:req.params.id
    })
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/cart', (req, res) =>{
    const data = {
    };
    Cart.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/cart', (req,res)=>{
    const data = req.body;

    const newCart = new Cart(data);
    newCart.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

// app.get('/admin', (req, res) =>{
//     const data = {
//     };
//     Admin.find({})
//     .then((data)=>{
//         console.log('Data: ', data);
//         res.json(data);
//     })
//     .catch((error)=>{
//         console.log('error: ', daerrorta)
//     })
// });

app.listen(PORT, console.log(`Sever is starting at ${PORT}`));