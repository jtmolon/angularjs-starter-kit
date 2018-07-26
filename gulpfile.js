var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var embedTemplates = require('gulp-angular-embed-templates');
var gulpSequence = require('gulp-sequence')


gulp.task('embed-template', function () {
  return gulp.src('src/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./temp'));
});

gulp.task('js', function(){
  return gulp.src(['temp/newcomponent.module.js', 'temp/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('newcomponent.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('css', function(){
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'))
});

gulp.task('fonts', function(){
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('build/fonts'))
});

gulp.task('default', gulpSequence('embed-template', ['js', 'css', 'fonts']));
