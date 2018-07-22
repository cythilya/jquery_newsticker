'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify-es').default;
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var debug = require('gulp-debug');

gulp.task('default', ['scripts', 'styles', 'watch']);

gulp.task('watch', function() {
  gulp.watch([
   	'js/jquery.newsticker.js',
  ], ['scripts']);
  gulp.watch([
  	'css/jquery.newsticker.scss'
  ], ['styles']);
});

gulp.task('scripts', function() {
  gulp.src([
    'js/jquery.newsticker.js'
    ])
  .pipe(uglify().on('error', gutil.log))
  .pipe(rename('js/jquery.newsticker.min.js'))
  .pipe(debug({
    title: 'debug scripts:'
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
	return gulp.src('css/jquery.newsticker.scss')
		.pipe(sass().on('error', gutil.log))
		.pipe(cleanCss())
    .pipe(rename('css/jquery.newsticker.min.css'))
	  .pipe(gulp.dest('./'));
});