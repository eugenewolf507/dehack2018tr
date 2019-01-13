"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("gulp-cssnano");
const gcmq = require("gulp-group-css-media-queries");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const plumber = require("gulp-plumber");
const rigger = require("gulp-rigger");
const stylelint = require("gulp-stylelint");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
require('focus-visible')

gulp.task("html", () => {
  return gulp
    .src("./src/*.html")
    .pipe(rigger())
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest("./build"));
});

gulp.task("styles", () => {
  return gulp
    .src("./src/scss/styles.scss")
    .pipe(plumber())
    .pipe(
      stylelint({
        reporters: [{ formatter: "string", console: true }]
      })
    )
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["> 0.1%"],
          cascade: false
        })
      ])
    )
    .pipe(gcmq())
    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task("scripts", () => {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./build/js"))
    .pipe(uglify())
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest("./build/js"));
});

gulp.task("svg-sprite", () => {
  return gulp
    .src("./src/img/sprite/**/*.svg")
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./build/img"));
});

gulp.task("images", () => {
  return gulp
    .src([
      "./src/img/**/*.{png,jpg,jpeg,svg,ico,gif,json,webmanifest,xml}",
      "!./src/img/sprite/**/*.*"
    ])
    .pipe(
      imagemin([
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest("./build/img"));
});

gulp.task("fonts", () => {
  return gulp
    .src("./src/fonts/**/*.{woff,woff2}")
    .pipe(gulp.dest("./build/fonts"));
});

gulp.task('del-build', function() {
  return del('build');
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.html", gulp.parallel("html"));
  gulp.watch("src/scss/**/*.scss", gulp.parallel("styles"));
  gulp.watch("src/js/**/*.js", gulp.parallel("scripts"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: "./build",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    logPrefix: "DevServer",
    host: "localhost",
    port: 3000
  });
  browserSync.watch("build", browserSync.reload);
});

gulp.task(
  "build",
  gulp.series("del-build", gulp.parallel("images", "html", "styles", "scripts", "svg-sprite", "fonts"))
);

gulp.task(
  "start",
  gulp.series("build", gulp.parallel("serve", "watch"))
);
