const Character = require('../Models/character.model');

const ctrlCharacter = {}

ctrlCharacter.postCharacter = async (req, res) => {

    const { Name, Characteristics, ProfesionalInfo, Skills, Gallery } = req.body

    const newCharacter = new Character({
        Name: Name,
        Characteristics: Characteristics,
        ProfesionalInfo: ProfesionalInfo,
        Skills: Skills,
        Gallery: Gallery,
    })

    try {
        const saveCharacter = await newCharacter.save();
    
        return res.json({
            msg: "El personaje se ha guardado correctamente",
            saveCharacter
        })
    } catch (error) {
        console.log(error);
        return error
    }

},

ctrlCharacter.getCharacters = async (req, res) => {

    try {
        const characters = await Character.find({}, '_id Name Gallery').lean();
        
        const modifiedCharacters = characters.map(character => {
            return {
              _id: character._id,
              Name: character.Name,
              ProfileImage: character.Gallery.Category.CharacterGallery.ProfileImage
            };
        });

        return res.json({
            msg: 'Lista de personajes',
            Characters: modifiedCharacters
        })

    } catch (err) {
        return res.status(500).json({
            Error: "Ha ocurrido un error al obtener información de los personajes",
            err
        })
    }
    
}

module.exports = ctrlCharacter