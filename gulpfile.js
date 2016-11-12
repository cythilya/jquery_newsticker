'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename");

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
  .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
	return gulp.src('css/jquery.newsticker.scss')
		.pipe(sass().on('error', gutil.log))
		.pipe(cleanCss())
    .pipe(rename('css/jquery.newsticker.min.css'))
	  .pipe(gulp.dest('./'));
});