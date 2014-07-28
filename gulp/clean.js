var gulp   = require('gulp');
var clean  = require('gulp-clean');

gulp.task('clean', function() {
    gulp.src([
        'web/js',
        'web/css'
    ], { read: false }).pipe(clean());
});
