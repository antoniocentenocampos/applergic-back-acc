const Allergy = require('../models/Allergy');


//PAGINA DE ALERGIAS

async function listAllergies(req, res){
    try{
        const results = await Allergy.find();
        const parsedResult = results.reduce((accumulator, current) => {
            if (accumulator[current.letter]) {
                accumulator[current.letter]=[...accumulator[current.letter], current];
            } else {
                accumulator[current.letter]=[current];
            }

            return accumulator;

        }, {});
        // console.log(parsedResult);
        res.json(parsedResult);
        

    }
    catch(err){
        res.json({saved: false})
    }
}

async function createAllergy(req, res){
    try{
        const newAllergy = new Allergy()
        newAllergy.name = req.body.name;
        newAllergy.letter = req.body.letter
        await newAllergy.save();
        res.json({results: [newAllergy]});  
    }
    catch(err){
        res.json({listed: false})
    }
}

module.exports = {
    listAllergies,
    createAllergy,
}