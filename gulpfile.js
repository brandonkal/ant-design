/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const gulp = require('gulp');
// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('gulp-autoprefixer');
const stripCssComments = require('gulp-strip-css-comments');
// const cssToJs = require('css-in-js-generator/index');

gulp.task('default', () =>
  gulp
    .src('lib/**/style/*.css')
    .pipe(
      autoprefixer({
        browsers: ['>100%'],
        cascade: false,
      }),
    )
    .pipe(stripCssComments())
    // .pipe(cssToJs())
    .pipe(gulp.dest('no-prefix')),
);
