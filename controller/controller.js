const words = require("../data/data");

const wordDefinition = async (req, res) => {
    res.status(200).json({words})
}



module.exports = wordDefinition;