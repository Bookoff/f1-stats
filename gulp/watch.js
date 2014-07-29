var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(['assets/js/**/*.js'], ['scripts']);
    gulp.watch(['assets/scss/**/*.scss'], ['styles']);
});
