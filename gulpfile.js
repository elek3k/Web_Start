const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// Static server
function bs() {
  // [serveSass(), compress()];
  serveSass()
  browserSync.init({
      proxy: 'webStart.loc',
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./*.php").on('change', browserSync.reload);

};

function serveSass(done) {
  return src('./sass/**/*.sass', './sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('./css/'))
  .pipe(browserSync.stream())
  done();
};


exports.default = bs