'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('style', function(){
    return gulp.src('frontend/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
});

gulp.task('clean',function(){
    return del('public');
});

gulp.task('assets', function(){
    return gulp.src('frontend/assets/**')
        .pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('style', 'assets')))