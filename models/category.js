const mongoose = require('mongoose');

const AVATAR_PATH = "/uploads/Admins";

const multer = require('multer');

const path = require('path');

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "gallery"
    },
    subImage : {
        type : String,
        required : true
    },
});
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_PATH))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

categorySchema.statics.uploadedAvtar = multer({ storage: imageStorage }).single('subImage')
categorySchema.statics.avtarPath = AVATAR_PATH


const category = mongoose.model('category', categorySchema);

module.exports = category;