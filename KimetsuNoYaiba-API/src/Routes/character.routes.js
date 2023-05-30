const router = require('express').Router()

const {
    postCharacter,
    getCharacters,
    getCharacter,
    getCharacterByName
} = require('../Controllers/character.controller')

router.post('/send', postCharacter)
router.get('/getAll', getCharacters)
router.post('/character', getCharacter)
router.get('/getByName/:name', getCharacterByName)

module.exports = router