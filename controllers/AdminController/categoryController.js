var Gallery = require('../../models/gallery');
var Category=require('../../models/category')

module.exports.insertcategoryRecord = async (req, res) => {
    var imagePath = ''

    if (req.file) {
        imagePath = Category.avtarPath + "/" + req.file.filename
        req.body.subImage = imagePath
    }

    let categoryData = await Category.create(req.body);
    if (categoryData) {
        req.flash('success', 'gallery record inserted');
        return res.redirect('back');
    }
    else {
        req.flash('error', 'Something wrong');
        return res.redirect('back');
    }
}

