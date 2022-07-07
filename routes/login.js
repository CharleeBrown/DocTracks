var express = require('express');
var router = express.Router();
var config = require('../configs');
var getData = require('../public/javascripts/data.js');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lee:"+config.dbKey+"@cluster0.guc9f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("MainDocs").collection("InstructionTrack");

//var randObj = 
//const inserts = ;
//const finder= collection.find();
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login');
});

module.exports = router;
