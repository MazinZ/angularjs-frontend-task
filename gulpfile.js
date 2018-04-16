const gulp  = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const dist = 'app/build/';
const jsFiles = ['app/js/*.js'];
const scssFiles = ['app/scss/*.scss'];

gulp.task('sass', () => {
  return gulp.src(scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(dist));
});

gulp.task('js', () => {
  return gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(dist));
});

gulp.task('watch', () => {
  gulp.watch(jsFiles, ['js']);
  gulp.watch(scssFiles, ['sass']);
});

gulp.task('default', ['js', 'sass'], () => {
  console.log('Build finished.');
});