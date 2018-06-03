const gulp = require("gulp");
const sass = require("gulp-sass");

const sourcemaps = require('gulp-sourcemaps');       
const autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();

const path = {
    scssIn: './sass/app.scss',
    scssAll: './sass/**/*.scss',
    scssOut: './public/css'
};

gulp.task('serve', function() {
    browserSync.init({
        proxy: "localhost:3000"
    });
});


gulp.task('style', () => {
    gulp.src(path.scssIn)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.scssOut))
        .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch(path.scssAll, ['style', 'serve']).on( 'change', browserSync.reload );
});