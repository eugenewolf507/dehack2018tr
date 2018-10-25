'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sequence = require('run-sequence');
const rigger = require('gulp-rigger');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
//const autoprefixer = require('autoprefixer');
const autoprefixer = require('gulp-autoprefixer');
const shell = require('gulp-shell');

gulp.task('html', () =>
  gulp
    .src('./src/index.html')
    .pipe(rigger())//add!!!
    .pipe(gulp.dest('./build'))
);

gulp.task('sass', function(){
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({add: true, browsers: ['last 5 versions']}))
    //.pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  gulp
    .src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build/js'));
    //console.log('scripts');
}
);

// gulp.task('gulp-template', shell.task('handlebars src/templates/ListItem -f src/js/templatesCompiled.js'))


gulp.task('serve', function() { // ['sass'], зачем этот аргумент????

  browserSync.init({
      server: "./build"
  });

});

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('build', cb =>
  sequence(
    'sass',
    'html',
    'scripts',
    cb,
  ),
);


gulp.task('start', cb => sequence('build', 'serve', 'watch'));