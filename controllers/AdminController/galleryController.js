var Gallery = require('../../models/gallery');
var category=require('../../models/category')

module.exports.add_gallery = async (req, res) => {
    return res.render('Add_gallery');
}

module.exports.insertgalleryRecord = async (req, res) => {
    let galleryData = await Gallery.create(req.body);
    if (galleryData) {
        req.flash('success', 'gallery record inserted');
        return res.redirect('/gallery/add_gallery');
    }
    else {
        req.flash('error', 'Something wrong');
        return res.redirect('/gallery/add_gallery');
    }
}

module.exports.add_category = async (req, res) => {
    let categoryData = await Gallery.find({})
    return res.render('Add_category', {
        'data': categoryData
    });
}

