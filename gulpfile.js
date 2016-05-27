'use strict';

let gConfig = require('./general.config');
let gulp = require('gulp');
const $ = require('gulp-load-plugins')({
	scope: ['devDependencies'],
	lazy: true
});

// Vendor scripts, the order matters.
const LIBRARIES = [
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/http.dev.js'
].map((file) => 'node_modules/' + file);

gulp.task('libs:js', () => {
	return gulp.src(LIBRARIES)
		.pipe($.uglify())
		.pipe($.sourcemaps.init())
		.pipe($.concat('libraries.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./src'));
});

gulp.task('copy:html', () => {
	return gulp.src('./app/**/*.html')
		.pipe(gulp.dest('./src'))
		.pipe($.connect.reload());
});

gulp.task('compile:sass', () => {
	return gulp.src('./app/**/*.scss')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer('last 5 versions'))
		.pipe($.minifyCss(''))
		.pipe(gulp.dest('./src'))
		.pipe($.connect.reload());
});

gulp.task('compile:es6', () => {
	return gulp.src('./app/**/*.js')
		.pipe($.babel())
		.pipe(gulp.dest('./src'))
		.pipe($.connect.reload());
});

gulp.task('watch', () => {
	gulp.watch(['./app/**/*.scss'], ['compile:sass']);
	gulp.watch(['./app/**/*.html'], ['copy:html']);
	gulp.watch(['./app/**/*.js'], ['compile:es6']);
});

gulp.task('connect', () => {
	$.connect.server({
		port: 8080,
		root: ['./src'],
		host: 'localhost',
		livereload: true,
		debug: true
	});
});

gulp.task('default', [
	'libs:js',
	'copy:html',
	'compile:es6',
	'compile:sass',
	'watch',
	'connect'
]);