const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
});
const gallery = mongoose.model('gallery', gallerySchema);

module.exports = gallery;