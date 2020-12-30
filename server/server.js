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
     status:String,
     date:String,
     time:String,
     paypalstatus:String
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

const DisableJacketSchema = new mongoose.Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const JeanSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});
JeanSchema.plugin(AutoIncrement, {id: 'id_jean',inc_field: 'id', start_seq:'9'});

const DisableJeanSchema = new mongoose.Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const TshirtSchema = new Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});
TshirtSchema.plugin(AutoIncrement, {id: 'id_t-shirt',inc_field: 'id', start_seq:'35'});

const DisableTshirtSchema = new mongoose.Schema({
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
FemaleJacketSchema.plugin(AutoIncrement, {id: 'id_femalejacket',inc_field: 'id', start_seq:'9'});

const DisableFemaleJacketSchema = new mongoose.Schema({
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
FemaleJeanSchema.plugin(AutoIncrement, {id: 'id_femalejean',inc_field: 'id', start_seq:'9'});

const DisableFemaleJeanSchema = new mongoose.Schema({
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
FemaleTshirtSchema.plugin(AutoIncrement, {id: 'id_femalet-shirt',inc_field: 'id', start_seq:'11'});

const DisableFemaleTshirtSchema = new mongoose.Schema({
    id:Number,
    name:String,
    image:Array,
    price:Number,
    size:Array
});

const PaypalSchema = new mongoose.Schema({
    orderID:Object
});

//Model
// const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const Cart = mongoose.model('cart',CartSchema)
// const Admin = mongoose.model('admin',AdminSchema)
const Jacket = mongoose.model('jacket',JacketSchema)
const DisableJacket =mongoose.model('disablejacket',DisableJacketSchema)
const Jean = mongoose.model('jean',JeanSchema)
const DisableJean =mongoose.model('disablejean',DisableJeanSchema)
const Tshirt = mongoose.model('t-shirt',TshirtSchema)
const DisableTshirt =mongoose.model('disablet-shirt',DisableTshirtSchema)
const FemaleJacket = mongoose.model('femalejacket',FemaleJacketSchema)
const DisableFemaleJacket =mongoose.model('disablefemalejacket',DisableFemaleJacketSchema)
const FemaleJean = mongoose.model('jeanfemale',FemaleJeanSchema)
const DisableFemaleJean =mongoose.model('disablefemalejean',DisableFemaleJeanSchema)
const FemaleTshirt = mongoose.model('t-shirtfemale',FemaleTshirtSchema)
const DisableFemaleTshirt =mongoose.model('disablefemalet-shirt',DisableFemaleTshirtSchema)
const Paypal = mongoose.model('paypal',PaypalSchema)

//Saving data to our mongo database
const data = {
}

// const newBlogPost = new BlogPost(data); 
const newCart = new Cart(data);// instance of the model
// const newAdmin = new Admin(data);
const newJacket = new Jacket(data);
const newDisableJacket = new DisableJacket(data);
const newJean = new Jean(data)
const newDisableJean = new DisableJean(data);
const newTshirt = new Tshirt(data)
const newDisableTshirt = new DisableTshirt(data);
const newFemaleJacket = new FemaleJacket(data);
const newDisableFemaleJacket = new DisableFemaleJacket(data)
const newFemaleJean = new FemaleJean(data);
const newDisableFemaleJean = new DisableFemaleJean(data)
const newFemaleTshirt = new FemaleTshirt(data);
const newDisableFemaleTshirt = new DisableFemaleTshirt(data)
const newPaypal = new Paypal(data);

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


//Jacket
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

  app.get('/disablejacket', (req, res) =>{
    const data = {
    };

    DisableJacket.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablejacket/:id', (req, res) =>{
    const data = {
    };
    DisableJacket.findOne({
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

app.post('/disablejacket', (req,res)=>{
    const data = req.body;

    const newDisableJacket = new DisableJacket(data);
    newDisableJacket.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablejacket/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableJacket.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })


//Jean
app.get('/jean', (req, res) =>{
    const data = {
    };

    Jean.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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
        // console.log('Data: ', data);
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

  app.get('/disablejean', (req, res) =>{
    const data = {
    };

    DisableJean.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablejean/:id', (req, res) =>{
    const data = {
    };
    DisableJean.findOne({
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

app.post('/disablejean', (req,res)=>{
    const data = req.body;

    const newDisableJean = new DisableJean(data);
    newDisableJean.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablejean/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableJean.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })

//T-shirt
app.get('/t-shirt', (req, res) =>{
    const data = {
    };

    Tshirt.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});


app.post('/t-shirt', (req,res)=>{
    const data = req.body;

    const newTshirt = new Tshirt(data);
    newTshirt.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/t-shirt/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await Tshirt.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/t-shirt/:id', async (req, res)=>{
   try{
       const updatePost = await Tshirt.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });

  app.get('/disablet-shirt', (req, res) =>{
    const data = {
    };

    DisableTshirt.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablet-shirt/:id', (req, res) =>{
    const data = {
    };
    DisableTshirt.findOne({
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

app.post('/disablet-shirt', (req,res)=>{
    const data = req.body;

    const newDisableTshirt = new DisableTshirt(data);
    newDisableTshirt.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablet-shirt/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableTshirt.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })

  //FemaleJacket
app.get('/femalejacket', (req, res) =>{
    const data = {
    };

    FemaleJacket.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/femalejacket', (req,res)=>{
    const data = req.body;

    const newFemaleJacket = new FemaleJacket(data);
    newFemaleJacket.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/femalejacket/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await FemaleJacket.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/femalejacket/:id', async (req, res)=>{
   try{
       const updatePost = await FemaleJacket.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });

  app.get('/disablefemalejacket', (req, res) =>{
    const data = {
    };

    DisableFemaleJacket.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablefemalejacket/:id', (req, res) =>{
    const data = {
    };
    DisableFemaleJacket.findOne({
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

app.post('/disablefemalejacket', (req,res)=>{
    const data = req.body;

    const newDisableFemaleJacket = new DisableFemaleJacket(data);
    newDisableFemaleJacket.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablefemalejacket/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableFemaleJacket.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })


//FemaleJean
app.get('/femalejean', (req, res) =>{
    const data = {
    };

    FemaleJean.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/femalejean', (req,res)=>{
    const data = req.body;

    const newFemaleJean = new FemaleJean(data);
    newFemaleJean.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/femalejean/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await FemaleJean.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/femalejean/:id', async (req, res)=>{
   try{
       const updatePost = await FemaleJean.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });

  app.get('/disablefemalejean', (req, res) =>{
    const data = {
    };

    DisableFemaleJacket.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablefemalejean/:id', (req, res) =>{
    const data = {
    };
    DisableFemaleJacket.findOne({
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

app.post('/disablefemalejean', (req,res)=>{
    const data = req.body;

    const newDisableFemaleJacket = new DisableFemaleJacket(data);
    newDisableFemaleJacket.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablefemalejean/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableFemaleJacket.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })

//FemaleT-shirt
app.get('/femalet-shirt', (req, res) =>{
    const data = {
    };

    FemaleTshirt.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.post('/femalet-shirt', (req,res)=>{
    const data = req.body;

    const newFemaleTshirt = new FemaleTshirt(data);
    newFemaleTshirt.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/femalet-shirt/:id', async (req,res)=>{
  try{
    console.log(req.params.id);
      const removedPost = await FemaleTshirt.remove({id: req.params.id});
      res.json(removedPost);
  }
  catch(err){
    res.json({message:err});
  }
})

app.patch('/femalet-shirt/:id', async (req, res)=>{
   try{
       const updatePost = await FemaleTshirt.updateOne(
           {id: req.params.id},
           {$set: {name:req.body.name,price:req.body.price,image:req.body.image}}
       );
       res.json(updatePost);
   }catch (err){
       
       res.json({message:err});
   }
  });

  app.get('/disablefemalet-shirt', (req, res) =>{
    const data = {
    };

    DisableFemaleTshirt.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/disablefemalet-shirt/:id', (req, res) =>{
    const data = {
    };
    DisableFemaleTshirt.findOne({
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

app.post('/disablefemalet-shirt', (req,res)=>{
    const data = req.body;

    const newDisableFemaleTshirt = new DisableFemaleTshirt(data);
    newDisableFemaleTshirt.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.delete('/disablefemalet-shirt/:id', async (req,res)=>{
    try{
      console.log(req.params.id);
        const removedPost = await DisableFemaleTshirt.remove({id: req.params.id});
        res.json(removedPost);
    }
    catch(err){
      res.json({message:err});
    }
  })


//Cart
app.get('/cart', (req, res) =>{
    const data = {
    };
    Cart.find({})
    .then((data)=>{
        // console.log('Data: ', data);
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

app.patch('/cart/:id', async (req, res)=>{
    try{
        const updatePost = await Cart.updateOne(
            {id: req.params.id},
            {$set: {status:req.body.status}}
        );
        res.json(updatePost);
    }catch (err){
        
        res.json({message:err});
    }
   });

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

//paypal
app.get('/paypal', (req, res) =>{
    const data = {
    };

    Paypal.find({})
    .then((data)=>{
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/paypal/:id', (req, res) =>{
    const data = {
    };
    Paypal.findOne({
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

app.post('/paypal', (req,res)=>{
    const data = req.body;

    const newPaypal = new Paypal(data);
    newPaypal.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        return res.json({
            msg: ' Your data has been saved!!!'
        })
    })
})

app.listen(PORT, console.log(`Sever is starting at ${PORT}`));