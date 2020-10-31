//Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://khanh:khanh123@rest.ycmu9.mongodb.net/khanh?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!!!!')
})
//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    id:Number,
    name:String,
    src:String,
    price:Number,
    size:Array,
});

const CartSchema = new Schema({
     name:String,
     address:String,
     phone_number:String,
     id:String,
     product:Array
})

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const Cart = mongoose.model('cart',CartSchema)

//Saving data to our mongo database
const data = {
    // title: 'Welcome',
    // body: 'Bla bla'
}

const newBlogPost = new BlogPost(data); // instance of the model
const newCart = new Cart(data);

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

app.get('/t-shirt', (req, res) =>{
    const data = {
        // username:'khanh',
        // age:'21'
    };

    BlogPost.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', daerrorta)
    })
});

app.get('/t-shirt/:id', (req, res) =>{
    //console.log(req.params)
    const data = {
        // username:'khanh',
        // age:'21'
    };
    BlogPost.findOne({
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
        // username:'quyen',
        // age:'20'
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

app.listen(PORT, console.log(`Sever is starting at ${PORT}`));