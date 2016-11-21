var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles =  [
  'vendor/javascripts/jquery-2.1.1.js',
  'vendor/javascripts/materialize.min.js',
  'vendor/javascripts/angular.min.js',
  'vendor/javascripts/app.js',
  'vendor/javascripts/controller-app.js',
  'vendor/javascripts/controller-auth.js',
  'vendor/javascripts/controller-course.js'
],
jsDest = 'app/assets/javascripts';

var cssFiles = [
  'vendor/stylesheets/material-icons.css',
  'vendor/stylesheets/materialize.min.css',
  'vendor/stylesheets/font-awesome.min.css',
  'vendor/stylesheets/base.css'
];
cssDest = 'app/assets/stylesheets';

// javascripts
gulp.task('build:javascripts', function() {
  return gulp.src(jsFiles)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(rename('application.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
});

// stylesheets
gulp.task('build:stylesheets', function () {
  return gulp.src(cssFiles)
  .pipe(concat('application.css'))
  .pipe(gulp.dest(cssDest))
  .pipe(rename('application.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest(cssDest));
});

gulp.task('default', [
  'build:javascripts',
  'build:stylesheets'
]);
