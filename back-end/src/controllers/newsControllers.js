const { v4: uuidv4 } = require('uuid');
const newsModel = require('../models/newsModel');

// Get all news or news by id
const getNews = (req, res) => {
  const { newsId } = req.params;
  if (newsId) {
    const news = newsModel.getPersonById(newsId);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'Person not found' });
    }
  } else {
    res.json(newsModel.getAllNews());
  }
};

// Create new news
const createNews = (req, res) => {
  const { title, description, date, link, image, time, company} = req.body;
  if (null) {
    return res.status(400).json({ message: 'this are required' });
  }

  const id = uuidv4();
  const newNews = { id, title, description, date, link, image, time, company };
  newsModel.addNews(newNews);
  res.status(200).json(newNews);
};

// Update news
const updateNews = (req, res) => {
  const { newsId } = req.params;
  const { title, description, date, link, image, time, company} = req.body;
  const updatedNews = newsModel.updateNews(personId, { title, description, date, link, image, time, company});
  if (updatedNews) {
    res.json(updatedNews);
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

// Delete news
const deleteNews = (req, res) => {
  const { newsId } = req.params;
  const deletedNews = newsModel.deleteNews(newsId);
  if (deletedNews) {
    res.json({ message: 'Person deleted successfully' });
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

module.exports = { getNews, createNews, updateNews, deleteNews };