const express = require('express');
const app = express();
const adaro = require('adaro');
const makara = require('makara');
const i18n = require('i18n');
const enrouten = require('express-enrouten');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const port = process.env.PORT || 5000;

// view
let helpers = [
  'dust-makara-helpers'
];
app.engine('dust', makara.dust({
  cache: false,
  helpers: helpers
}));
app.set('view engine', 'dust');
app.set('views','app/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// expressValidator
app.use(expressValidator({
  errorFormatter: function(param, message, value) {
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      error: {
        param: formParam,
        message: message
      }
    };
  }
}));

// i18n
app.use(makara({
  i18n: {
    contentPath: path.resolve(__dirname, 'locales'),
    fallback: 'es-NI'
  }
}));

i18n.configure({
  locales: [
    'es-NI'
  ],
  directory: __dirname + '/locales',
  defaultLocale: 'es-NI'
});

app.use(i18n.init);

// routes
app.use(enrouten({
  directory: 'app/controllers'
}));

// public
app.use(express.static('app/assets'));

// listen
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
