var gulp           = require('gulp');
var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');

gulp.task('scripts', function() {
    var scriptsPath = mainBowerFiles();

    scriptsPath.push('assets/js/**/*.js');

    gulp.src(scriptsPath)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('web/js'));
});
