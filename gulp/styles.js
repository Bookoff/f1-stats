var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var sass      = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(minifycss('style.css'))
        .pipe(gulp.dest('web/css/'));
});
