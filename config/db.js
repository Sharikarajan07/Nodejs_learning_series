
const dns = require('dns');

const mongoose = require("mongoose");

dns.setServers(['8.8.8.8', '1.1.1.1']);

const dbconnect= async() =>{
    try {
        await mongoose.connect('mongodb+srv://sharikarajan_db_user:sharikarajan@cluster0.kmarq0n.mongodb.net/Besantdb');
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.log(err);
    }
};
module.exports=dbconnect;

dbconnect();