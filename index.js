const express = require('express');
const app = express();
const adaro = require('adaro');
const makara = require('makara');
const path = require('path');
const port = process.env.PORT || 5000;

// view
let helpers = [ 'dust-makara-helpers' ];
app.engine('dust', makara.dust({
  cache: false,
  helpers: helpers
}));
app.set('view engine', 'dust');
app.set('views','app/views');

// i18n
app.use(makara({
  i18n: {
    contentPath: path.resolve(__dirname, 'locales'),
    fallback: 'es-NI'
  }
}));

// public
app.use(express.static('app/assets'));

app.get('/', (req, res) => {
  res.render('index');
});

// listen
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
