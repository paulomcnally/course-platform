const env = process.env.NODE_ENV || 'development';
const express = require('express');
const app = express();
const adaro = require('adaro');
const makara = require('makara');
const i18n = require('i18n');
const compression = require('compression')
const enrouten = require('express-enrouten');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const expressValidator = require('express-validator');
const path = require('path');
const port = process.env.PORT || 5000;
const redis = require('redis');
const config = require('./config/config.json')[env];

// view
let helpers = [
  'dust-makara-helpers',
  'dustjs-helpers-gravatar'
];
app.engine('dust', makara.dust({
  cache: false,
  helpers: helpers
}));
app.set('view engine', 'dust');
app.set('views','app/views');

// cookie parser
app.use(cookieParser());

// redis options
if (config.redis.use_env_variable) {
  var redisClient = redis.createClient(process.env[config.redis.use_env_variable]);
} else {
  var redisClient = redis.createClient(config.redis.port, config.redis.host);
}

// session secret
if (config.session.secret.use_env_variable) {
  var sessionSecret = process.env[config.session.secret.use_env_variable];
} else {
  var sessionSecret = config.session.secret;
}

// sessions
app.use(session({
  store: new RedisStore({
    client: redisClient
  }),
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true
}))

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

// gzip
app.use(compression());

// public
app.use(express.static('app/assets'));

// listen
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
