let client = require('../dbConnection');
let collection = client.db('sit-725').collection('marvel');

function addCharacter(character, callback) {
    collection.insertOne(character, callback);
}

function fetchAllCharacters(callback){
    collection.find().toArray(callback);
}

module.exports = {addCharacter, fetchAllCharacters}