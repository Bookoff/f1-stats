var gulp           = require('gulp');
var runSequence    = require('run-sequence');
var requireDir     = require('require-dir');
var dir            = requireDir('./gulp');

gulp.task('build', [], function() {
        runSequence('clean', 'jshintTask', 'scriptsTask', 'stylesTask', 'watch');
});

gulp.task('default', ['build'], function(){});
