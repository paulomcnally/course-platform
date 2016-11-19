
## Requirements

* Redis
* PostgreSQL

## Seeds

Require https://github.com/sequelize/cli

    $ sequelize db:migrate
    $ sequelize db:seed --seed 20160828060434-user-admin.js
    $ sequelize db:seed --seed 20160827191911-categories.js
    $ sequelize db:seed --seed 20160914112837-categories-development.js
    $ sequelize db:seed --seed 20161118204044-codes.js

# Precompile assets

All assets stored on vendors directory

    $ npm install --global gulp-cli
    $ gulp
