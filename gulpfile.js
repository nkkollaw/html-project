var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var opn = require('opn');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('html', [], function() {
	gulp.src('src/*.html')
		.pipe(wiredep())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('images', [], function() {
	gulp.src('src/images/**/*')
		.pipe(gulp.dest('dist/images/'));
});

gulp.task('css', [], function() {
	gulp.src('src/css/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());

	gulp.src('src/css/homepage.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('homepage.css'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
});

gulp.task('js', [], function() {
	gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('locales', [], function() {
	gulp.src('src/locales/**/*')
		.pipe(gulp.dest('dist/locales/'));
});

gulp.task('connect', function() {
	browserSync.init({
		server: {
			baseDir: "./dist/"
		},
		port: 8099,
		open: false
	});

	// open URL
	opn('http://localhost:8099');
});

gulp.task('watch', [], function() {
	gulp.watch('src/*.html', ['html', 'reload']);
  	gulp.watch('src/images/**/*', ['images', 'reload']);
	gulp.watch('src/css/**/*', ['css']);
	gulp.watch('src/js/**/*', ['js', 'reload']);
	gulp.watch('src/locales/**/*', ['locales', 'reload']);
});

gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('default', ['html', 'images', 'css', 'js', 'locales', 'connect', 'watch'], function() {
	// move Bower components
	gulp.src('bower_components/**/*')
		.pipe(gulp.dest('dist/bower_components/'));
});
