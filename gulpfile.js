var gulp = require('gulp');
var connect = require('gulp-connect');
var traceur = require('gulp-traceur');

gulp.task('copy:html', function () {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('build'));
});

gulp.task('compile:es6', function () {
	return gulp.src('app/**/*.js')
		.pipe(traceur({
			modules: 'instantiate',
			annotations: true
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('copy:libs', function () {
	return gulp.src([
		'node_modules/systemjs/dist/system.src.js',
		'node_modules/angular2/bundles/angular2.min.js'
	])
		.pipe(gulp.dest('build/libs/'));
});

gulp.task('connect', function () {
	connect.server({
		root: ['build'],
		host: '127.0.0.1',
		port: 9000
	})
});

gulp.task('default', ['copy:html', 'copy:libs', 'compile:es6', 'connect']);