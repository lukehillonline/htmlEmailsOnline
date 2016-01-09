/*
*   IMPORTANT NOTICE
*
*   A manual change needs to be made to the mc-inline-css node module to stop it from removing <style> tags.
*   Navigate to node_modules > gulp-mc-inline-css > index.js
*   On line 32 change:
*     'strip_css': true
*   to:
*     'strip_css': false
*/

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    inline = require('gulp-mc-inline-css'),
    del = require('del');

var config = require('./config.json');

gulp.task('clean-html', function(cb) {
  del([
    './templates/*/html'
  ], cb);
})

gulp.task('inliner', ['clean-html'], function() {
    return gulp.src(['./source/*.html'])
               .pipe(inline(config.APIKEY))
               .pipe(gulp.dest('./templates/'))
});

gulp.task('minify-html', ['inliner'], function() {
    var opts = {conditionals: true};

    gulp.src('./templates/*.html')
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest('./templates/'))
});

/*
*   Watch all changed files and perform its respective action
*/
gulp.task('watch', function() {
  gulp.watch('./source/*.h*ml', ['clean-html', 'inliner', 'minify-html']);
});
