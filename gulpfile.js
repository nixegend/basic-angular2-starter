'use strict';

let gConfig = require('./general.config');
let url = require('url');
let path = require('path');
let open = require('open');
let proxy = require('http-proxy-middleware');
let gulp = require('gulp');
const $ = require('gulp-load-plugins')({
	scope: ['devDependencies'],
	lazy: true
});

// libraries for client side, !> order is important <!.
const LIBRARIES = [
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
	'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js'
].map((file) => 'node_modules/' + file);

gulp.task('clean', () => {
	return gulp.src(gConfig.staticDir).pipe($.clean());
});

gulp.task('libs:js', () => {
	return gulp.src(LIBRARIES)
		.pipe($.uglify())
		.pipe($.sourcemaps.init())
		.pipe($.concat('libraries.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(gConfig.staticDir));
});

gulp.task('copy:html', () => {
	return gulp.src(gConfig.appDir + '/**/*.html')
		.pipe(gulp.dest(gConfig.staticDir))
		.pipe($.connect.reload());
});

gulp.task('compile:sass', () => {
	return gulp.src(gConfig.appDir + '/**/*.scss')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer('last 5 versions'))
		.pipe($.minifyCss(''))
		.pipe(gulp.dest(gConfig.staticDir))
		.pipe($.connect.reload());
});

gulp.task('compile:es6', () => {
	return gulp.src(gConfig.appDir + '/**/*.js')
		.pipe($.babel())
		.pipe(gulp.dest(gConfig.staticDir))
		.pipe($.connect.reload());
});

gulp.task('watch', () => {
	gulp.watch([gConfig.appDir + '/**/*.scss'], ['compile:sass']);
	gulp.watch([gConfig.appDir + '/**/*.html'], ['copy:html']);
	gulp.watch([gConfig.appDir + '/**/*.js'], ['compile:es6']);
});

gulp.task('run:server', () => {
	$.nodemon({
		ext: 'js',
		watch: ['server/']
	}).on('start', () => {
		console.log('NODEMON => App has started');
	}).on('quit', () => {
		console.log('NODEMON => App has quit');
	}).on('restart', (files) => {
		console.log('NODEMON => App restarted due to: \n', files);
	});
});

gulp.task('connect', () => {
	$.connect.server({
		port: gConfig.clientPort,
		root: [gConfig.staticDir],
		host: gConfig.clientHost,
		livereload: true,
		debug: true,
		fallback: path.join(__dirname, gConfig.staticDir + '/index.html'),
		middleware: function (connect, opt) {
			return [
				proxy(gConfig.urlAPI, {
					target: 'http://' + gConfig.serverHost + ':' + gConfig.serverPort,
					changeOrigin: true,
					ws: true
				})
			]
		}
	});
});

gulp.task('build', ['clean'], () => {
	gulp.start([
		'libs:js',
		'copy:html',
		'compile:es6',
		'compile:sass'
	], () => {
		console.log('======== Project was builded ========');
	});
});

gulp.task('default', [
	'libs:js',
	'copy:html',
	'compile:es6',
	'compile:sass',
	'run:server',
	'watch',
	'connect'
], () => {
	console.log('Listening at ' + gConfig.clientHost + ':' + gConfig.clientPort + '/');
    open('http://' + gConfig.clientHost + ':' + gConfig.clientPort + '/');
});