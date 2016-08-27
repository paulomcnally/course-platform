const express = require('express');
const app = express();
const adaro = require('adaro');
const port = process.env.PORT || 5000;

// view
app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');
app.set('views','app/views');

// public
app.use(express.static('app/assets'));

app.get('/', (req, res) => {
  res.render('index');
});

// listen
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
