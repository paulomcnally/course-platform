var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = 'vendor/javascripts/**/*.js',
jsDest = 'app/assets/javascripts';

var cssFiles = 'vendor/stylesheets/*.css',
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
