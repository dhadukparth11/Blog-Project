const Admin = require('../../models/Admin');
const Slider = require('../../models/Slider');
const Blogs = require('../../models/Blog');
const Comment = require('../../models/Comment');
const Gallery = require('../../models/gallery');
const Category = require('../../models/category');

module.exports.userHome = async (req, res) => {
    let SliderData = await Slider.find({});
    let BlogsData = await Blogs.find({});
    return res.render('userPanel/user_home', { layout: 'userPanel/user_home', 'sliderRecords': SliderData, 'BlogsData': BlogsData });
}

module.exports.BlogSingle = async (req, res) => {
    let singleRecord = await Blogs.findById(req.params.id);

    let countComment = await Comment.find({ blogId: req.params.id, isActive: true }).countDocuments();
    let commentData = await Comment.find({ blogId: req.params.id, isActive: true });

    let lastRecord = await Blogs.find({}).sort({ _id: -1 }).limit(3);
    console.log(lastRecord);

    return res.render('userPanel/Blog_single', { layout: 'userPanel/Blog_single', 'singleR': singleRecord, 'blogId': req.params.id, 'commentData': commentData, countComment: countComment, lastRecord: lastRecord });
}

module.exports.setComments = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    var imagePath = '';
    if (req.file) {
        imagePath = Comment.avatarPath + "/" + req.file.filename;
    }

    req.body.image = imagePath;
    req.body.isActive = true;
    let commentData = await Comment.create(req.body);
    if (commentData) {
        return res.redirect('back');
    }
    else {
        console.log("error");
        return res.redirect('back');
    }

}

module.exports.gallery = async (req, res) => {
    let page = ''

    if (req.query.page) {
        page = req.query.page
    }
    console.log(page);
    let allData = await Gallery.find({})

    let subD = await Category.find({}).populate('categoryId').exec()

    return res.render('userPanel/gallery', {
        layout: 'userPanel/gallery',
        allData: allData,
        subD: subD
    });
}