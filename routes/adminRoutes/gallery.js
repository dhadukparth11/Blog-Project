const express = require('express');

const routes = express.Router();

const Gallery = require('../../models/gallery');

const galleryController = require('../../controllers/AdminController/galleryController');

routes.get('/add_gallery', galleryController.add_gallery);

routes.post('/insertgalleryRecord',galleryController.insertgalleryRecord);

routes.get('/add_category', galleryController.add_category);

module.exports = routes;