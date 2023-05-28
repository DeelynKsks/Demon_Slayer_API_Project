const { model, Schema } = require('mongoose')
const moment = require('moment')
const CharacterSchema = new Schema({
    Name: {
        type: String,
        unique: true,
    },
    Characteristics: {
        Race: {
            type: String,
            required: true
        },
        Gender: {
            type: String,
            required: true
        },
        Age: {
            type: Number,
            required: true
        },
        Birthday: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        }
    },
    ProfesionalInfo: {
        Affiliation: {
            type: String,
            required: true
        },
        Ocupation: {
            type: String,
        },
        Range: {
            type: String,
            required: true
        },
    },
    Skills: {
        type: Object,
        required: true
    },
    Gallery: {
        Category: {
            CharacterGallery: {
                type: Object,
            },
            SkillsGallery: {
                type: Object
            }
        }
    },
    created_at: {
        type: String,
        default: () => moment().utcOffset(-3).format('DD/MM/YYYY, HH:mm:ss') + ', Argentina'
    },
    updated_at: {
        type: String,
        default: () => moment().utcOffset(-3).format('DD/MM/YYYY, HH:mm:ss') + ', Argentina'
    }
}, {
    versionKey: false,
})

module.exports = model("Character", CharacterSchema)