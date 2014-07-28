var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src('assets/js/**/*.js')
        .pipe(jshint());
});
