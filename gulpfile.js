var gulp = require('gulp');
var less = require('gulp-less');
var lint = require('gulp-csslint');
var sass = require('gulp-sass');

/*
 * Lint CSS sources.
 */
gulp.task('css', function () {
    gulp.src('./css/flat-ui-colors.css')
        .pipe(lint())
        .pipe(lint.reporter());
});

/*
 * Compile LESS sources into CSS.
 */
gulp.task('less', function () {
    gulp.src('./less/flat-ui-colors.less')
        .pipe(less())
        .pipe(gulp.dest('./target/less'));
});

/*
 * Compile SASS sources into CSS.
 */
gulp.task('sass', function () {
    gulp.src('./sass/flat-ui-colors.scss')
        .pipe(sass())
        .pipe(gulp.dest('./target/sass'));
});

/*
 * Default task (run tasks for CSS, LESS and SASS).
 */
gulp.task('default', ['css', 'less', 'sass']);
