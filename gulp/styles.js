var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var sass      = require('gulp-sass');
var rename    = require('gulp-rename');

gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('web/css/'));
});
