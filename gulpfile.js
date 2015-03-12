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
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public/app/css/'))	
		.pipe(rename({suffix: '.min'}))
    	.pipe(minifycss())
    	.pipe(gulp.dest('public/app/css/'))
		.pipe(notify({ message: 'Styles task complete without errors'}));

});

gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', ['styles']);
});


gulp.task('default', ['webserver', 'styles'], function() {
	gulp.start('watch');
});
