'use strict';

var gulp = require('gulp'),
 source = require('vinyl-source-stream'),
 browserify = require('browserify');
// Load plugins
var $ = require('gulp-load-plugins')();

<% if (includeSass) { %>
// Styles
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({
          includePaths: [
            'public/styles/sass',
            'public/styles/sass/libs',
            'public/img',
            'public/styles/fonts'
          ],
          errLogToConsole: true
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size())
        .pipe($.connect.reload());
});
<% } %>


// Scripts
gulp.task('scripts', function () {
    return  browserify({
      entries: ['app/scripts/app.js']
    })
    .bundle({debug:true})
    .pipe(source('app.js'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size())
    .pipe($.connect.reload());

});

///React precomiler
gulp.task('jsx', function () {
    return gulp.src('app/scripts/**/*.jsx', {base: 'app/scripts'})
        .pipe($.react())
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('default'))
        .pipe(gulp.dest('app/scripts'))
        .pipe($.size())
        .pipe($.connect.reload());
    });



<% if (includeJade) { %>

gulp.task('jade', function () {
    return gulp.src('app/template/*.jade')
        .pipe($.jade({ pretty: true }))
        .pipe(gulp.dest('dist'))
        .pipe($.connect.reload());
})

<% } %>

// HTML
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe($.size())
        .pipe($.connect.reload());
});

// Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size())
        .pipe($.connect.reload());
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false}).pipe($.clean());
});

// Bundle
//gulp.task('bundle', [<% if (includeSass) { %>'styles', <% } %>'scripts', 'bower'], $.bundle('./app/*.html'));

// Build
gulp.task('build', ['html',  'images']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// Connect
gulp.task('connect', $.connect.server({
    root: ['dist'],
    port: 9000,
    livereload: true
}));

// Bower helper
gulp.task('bower', function() {
    gulp.src('app/bower_components/**/*.js', {base: 'app/bower_components'})
        .pipe(gulp.dest('dist/bower_components/'));

});

gulp.task('json', function() {
    gulp.src('app/scripts/json/**/*.json', {base: 'app/scripts'})
        .pipe(gulp.dest('dist/scripts/'));
});


// Watch
gulp.task('watch', ['html', 'connect'], function () {

    // Watch .json files
    gulp.watch('app/scripts/**/*.json', ['json']);

    // Watch .html files
    gulp.watch('app/*.html', ['html']);

<% if (includeSass) { %>
    // Watch .scss files
    gulp.watch('app/styles/**/*.scss', ['styles']);
<% } %>

<% if (includeJade) { %>
    // Watch .jade files
    gulp.watch('app/template/**/*.jade', ['jade', 'html']);
<% } %>

<% if (includeCoffeeScript) { %>
    // Watch .coffeescript files
    gulp.watch('app/scripts/**/*.coffee', ['coffee', 'scripts']);
<% } %>

    // Watch .jsx files
    // gulp.watch('app/scripts/**/*.jsx', ['jsx', 'scripts']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);
});
