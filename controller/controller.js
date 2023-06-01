let model = require('../model/model');

const addCharacter = (req,res) => {
    let character = req.body;
    model.addCharacter(character, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Superhero Successfully Joined Marvel Army!!'});
        }
    });
}

const fetchAllCharacters = (req, res) => {
    model.fetchAllCharacters((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Superheros at Destinations'});
        }
    });
}

module.exports = {addCharacter, fetchAllCharacters}