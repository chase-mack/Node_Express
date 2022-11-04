const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, './views'));

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
