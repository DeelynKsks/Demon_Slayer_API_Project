const router = require('express').Router()

const {
    postCharacter,
    getCharacters,
    getCharacter
} = require('../Controllers/character.controller')

router.post('/send', postCharacter)
router.get('/getAll', getCharacters)
router.post('/character', getCharacter)

module.exports = router