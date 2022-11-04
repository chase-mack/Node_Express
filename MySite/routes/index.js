const express = require('express');
const router = express.Router();
const galleryRoute = require('./gallery');

module.exports = () => {
  router.get('/', (request, response) => {
    // eslint-disable-next-line no-undef
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/gallery', galleryRoute());
  return router;
};
