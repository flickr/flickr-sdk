// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var shell = require('gulp-shell');
var paths = require('./tasks/paths.js');

/**
 * JSHint
 */
gulp.task('jshint', function () {
	return gulp.src(paths.js)
		.pipe(jshint('./jshint.json'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

/**
* JSCS
*/
gulp.task('jscs', function () {
	return gulp.src(paths.js)
		.pipe(jscs());
});

/**
* Build the client JS
*/
gulp.task('build', shell.task(['./script/build.sh']));

gulp.task('default', ['jshint', 'jscs', 'build']);
