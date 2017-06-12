var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var header = require('gulp-header');

gulp.task('default', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(header('#! /usr/bin/env node\n'))
    .pipe(gulp.dest('./dist'));
});