const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const sass = require('gulp-sass')

gulp.task('hello', function(done) {
  console.log('Привет мир');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('rename', function(done) {
  gulp.src('./css/style.css')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./css/'));
  done();
})