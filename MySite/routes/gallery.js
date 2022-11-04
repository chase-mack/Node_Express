const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    // eslint-disable-next-line no-undef
    response.render('pages/gallery', { pageTitle: 'Gallery' });
  });

  router.get('/:shortname', (request, response) => {
    // eslint-disable-next-line no-undef
    response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
