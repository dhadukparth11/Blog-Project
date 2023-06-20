const express = require('express');

const routes = express.Router();

const Category = require('../../models/category');

const categoryController = require('../../controllers/AdminController/categoryController');

routes.post('/insertcategoryRecord',Category.uploadedAvtar,categoryController.insertcategoryRecord);

module.exports = routes;