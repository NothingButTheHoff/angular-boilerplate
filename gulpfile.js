'use strict';

var gulp      	 = require('gulp');
var webserver 	 = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var sass		 		 = require('gulp-ruby-sass');
 


gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});

gulp.task('styles', function() {
	return sass('src/sass/main.scss', { style: 'expanded' })
	//	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public/app/css/'));
});


gulp.task('default', ['webserver'], function() {
	gulp.start('styles');
});
