const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsControllers');
const multer = require('multer');

// Get all news or news by id
router.get('/:newsId?', newsController.getNews);

// Create new news
router.post('/', newsController.createNews);

// Update news
router.put('/:newsId', newsController.updateNews);

// Delete news
router.delete('/:newsId', newsController.deleteNews);

module.exports = router;