const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/assets');
const People = require('./models/users');
//var MongClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/"
// const Assets = require('./models/assets');
// 'mongodb://evaugh15:pgrOb7CQ7tRGtUrr@cluster0.ajypq.mongodb.net/assets'
//mongodb://localhost:27017/assets     /evaugh15:abc1234
//mongodb+srv://evaugh15:pgrOb7CQ7tRGtUrr@cluster0.ajypq.mongodb.net/assets?retryWrites=true&w=majority

//connect and display the status 
mongoose.connect('mongodb+srv://evaugh15:abc1234@cluster0.ajypq.mongodb.net/devices?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true })    
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
/*
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = [];
        dbo.collection("assets").insertMany(myobj, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });*/
    //const baseAPI = '/api/v1/';

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())
//app.use(cors())

//in the app.get() method below we add a path for the assets API 
//by adding /assets, we tell the server that this method will be called every time http://localhost:8000/assets is requested. 
app.get('/assets', (req, res, next) => {
    //we will add an array named appointment to pretend that we received this data from the database
    //call mongoose method find (MongoDB db.Assets.find())
    Item.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
  
  //Home Route
  app.get("/", function(req, res) {
    
    res.send("home");
  };
    
    //find a asset based on the id
app.get('/assets/:_id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.Assets.findOne())
    Item.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});

//serve incoming put requests to /students 
app.put('/assets/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set  new asset names, model, etc. 
        Item.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                itemName : req.body.itemName, 
                itemModel : req.body.itemModel,
                itemDes: req.body.itemDes,
                itemSerial: req.body.itemSerial,
                itemCost: req.body.itemCost,
                itemQty: req.body.itemQty
            }}, 
            {new:true} 
        ) 
        .then((item)=> { 
            if (item) { //what was updated 
                console.log(item); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
            res.status('400').send('ERROR')
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 

});

});

//serve incoming post requests to /assets
app.post('/assets', (req, res, next) => {
    // create a new student variable and save request’s fields 
    const item = new Item({
        itemName: req.body.itemName,
        itemModel: req.body.itemModel,
        itemDes: req.body.itemDes,
        itemSerial: req.body.itemSerial,
        itemCost: req.body.itemCost,
        itemQty: req.body.itemQty,
    });

        //send the document to the database 
        item.save()
        //in case of success
       .then(() => { console.log('Success');})
       //if error
       .catch(err => {console.log('Error:' + err);});
});

     //:id is a dynamic parameter that will be extracted from the URL
    app.delete("/assets/:id", (req, res, next) => {
        Item.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Asset Deleted!");
        });
    });
    

    app.get('/users', (req, res, next) => {
        //we will add an array named students to pretend that we received this data from the database
        People.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
    
    //find a student based on the id
    app.get('/users/:_id', (req, res, next) => {
        //call mongoose method findOne (MongoDB db.Students.findOne())
        People.findOne({_id: req.params.id}) 
            //if data is returned, send data as a response 
            .then(data => {
                res.status(200).json(data)
                console.log(data);
            })
            //if error, send internal server error
            .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
    });
        //serve incoming put requests to /students 
        app.put('/users/:id', (req, res, next) => { 
            console.log("id: " + req.params.id) 
            // check that the parameter id is valid 
            if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
                //find a document and set new first and last names 
                People.findOneAndUpdate( 
                    {_id: req.params.id}, 
                    {$set:{ 
                        Name: req.body.Name, 
                        userDept: req.body.userDept,
                        userEmail: req.body.userEmail,
                        userName: req.body.userName,
                        userPhone: req.body.userPhone,
                        userTitle: req.body.userTitle
                    }}, 
                    {new:true} 
                ) 
                .then((people) => { 
                    if (people) { //what was updated 
                        console.log(people); 
                    } else { 
                        console.log("no data exist for this id"); 
                    } 
                }) 
                .catch((err) => { 
                    console.log(err); 
                }); 
            } else { 
                console.log("please provide correct id"); 
            } 
    });
    
    
    });
    
    //serve incoming post requests to /students
    app.post('/users', (req, res, next) => {
        
        // create a new doctor variable and save requestâs fields 
    const people = new People({
        Name: req.body.Name, 
        userDept: req.body.userDept,
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        userPhone: req.body.userPhone,
        userTitle: req.body.userTitle
});
    
    //send the document to the database 
    people.save()
        //in case of success
        .then(() => { console.log('Success');})
        //if error
        .catch(err => {console.log('Error:' + err);});
                        
    });
        //:id is a dynamic parameter that will be extracted from the URL
    app.delete("/users/:id", (req, res, next) => {
        People.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("User Deleted!");
        });
    });

   //to use this middleware in other parts of the application
    
    module.exports=app;

/*
//in the app.get() method below we add a path for the patients API 
//by adding /patients, we tell the server that this method will be called every time http://localhost:8080/assets is requested. 
app.get('/assets', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
    //call mongoose method find (MongoDB db.item.find())
    item.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });

});
//find a asset based on the id
app.get('/assets/:_id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.item.findOne())
    item.findOne({_id: req.params.id})
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

//serve incoming put requests to /assets
app.put('/assets/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // create a new patient variable and save request’s fields 
    const asset = new Asset({
        Name: req.body.Name,
        Model: req.body.Model,
        Desc: req.body.Desc,
        Serial: req.body.Serial,
        Cost: req.body.Cost,
        Qty: req.body.Qty
    });
    //send the document to the database 
    item.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error:' + err); });

    //:id is a dynamic parameter that will be extracted from the URL
    app.delete("/assets/:id", (req, res, next) => {
        item.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        });
    });
});
*/
