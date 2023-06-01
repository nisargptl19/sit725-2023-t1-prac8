// Mongodb configuration

const { MongoClient } = require('mongodb');
const dbUri = 'mongodb+srv://sit725-nisarg:sit725-222599856@cluster0.lnz95om.mongodb.net/?retryWrites=true&w=majority';
var client = new MongoClient(dbUri, { useNewUrlParser: true });

client.connect((err) => {
    console.log("Calling to Marvel")
    // connectDb = client.db('sit-725').collection('marvel');
    if (!err) {
        console.log('Marvel connected successfully!!');
        // console.log(connectDb);
    } else {
        console.error(err);
        console.log("Call refused")
    }
});

module.exports = client