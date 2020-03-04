const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const sass = require('gulp-sass');


// Static server
function bs() {
  serveSass();
  compress();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass(done) {
  return src('./sass/*.sass')
    .pipe(sass())
    // .pipe(sass({outputStyle: 'compressed'}))
    // .pipe(rename({suffix: '.min'}))
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
    done();
};

function compress(done) {
  return src('./css/main.css')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
    done();
};

exports.default = bs;