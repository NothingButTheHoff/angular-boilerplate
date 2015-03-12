'use strict';

var gulp      	 = require('gulp');
var webserver 	 = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var sass		 = require('gulp-ruby-sass');
var notify		 = require('gulp-notify');
var minifycss	 = require('gulp-minify-css');
var rename		 = require('gulp-rename');
 


gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});

gulp.task('styles', function() {
	return sass('src/sass/main.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 3 version', 'safari 8', 'ie 11', 'ie 9', 'chrome 44','firefox 39', 'opera 29', 'ios 8', 'android 4'))
		.pipe(gulp.dest('public/app/css/'))	
		.pipe(rename({suffix: '.min'}))
    	.pipe(minifycss())
    	.pipe(gulp.dest('public/app/css/'))
		.pipe(notify({ message: 'Styles task completed without errors'}));
});


gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', ['styles']);
});


gulp.task('default', ['webserver', 'styles'], function() {
	gulp.start('watch');
});
