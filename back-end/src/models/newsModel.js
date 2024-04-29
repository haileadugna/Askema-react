const mongoose = require('mongoose');




let database = [];

const getAllNews = () => {
  return database;
};

const getNewsById = (newsId) => {
  return database.find(news => news.id === newsId);
};

const addNews = (newNews) => {
  database.push(newNews);
};

const updateNews = (newsId, updatedNews) => {
  const newsIndex = database.findIndex(news => news.id === newsId);
  if (newsIndex !== -1) {
    database[newsIndex] = { ...database[newsIndex], ...updatedNews };
    return database[newsIndex];
  }
  return null;
};

const deleteNews = (newsId) => {
  const newsIndex = database.findIndex(news => news.id === newsId);
  if (newsIndex !== -1) {
    const deletedNews = database.splice(newsIndex, 1);
    return deletedNews[0];
  }
  return null;
};

module.exports = { getAllNews, getNewsById, addNews, updateNews, deleteNews };