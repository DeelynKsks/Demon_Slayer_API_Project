const router = require('express').Router()

const {
    postCharacter,
    getCharacters
} = require('../Controllers/character.controller')

router.post('/send', postCharacter)
router.get('/getAll', getCharacters)

module.exports = router