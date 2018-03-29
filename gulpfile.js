var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

gulp.task('bowercopy', function() {
    return gulp.src([
        'bower_components/**/*.min.js',
        'bower_components/**/*.min.js.map',
        'bower_components/**/*.min.css',
        'bower_components/**/*.min.css.map',
        'bower_components/**/*.woff',
        'bower_components/**/*.woff2',
        'bower_components/**/*.eot',
        'bower_components/**/*.ttf',
        'bower_components/angular-route-segment/build/angular-route-segment.js'
    ]).pipe(gulp.dest('public/vendor'));
});
gulp.task('angular', function() {
    return gulp.src(['resources/assets/angular/app.js', 'resources/assets/angular/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('css', function() {
    return gulp.src(['resources/assets/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('html', function() {
    return gulp.src(['resources/assets/angular/views/**/*.html'])
        .pipe(gulp.dest('public/js/views'));
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/**/*.js', ['angular']);
    gulp.watch('resources/assets/**/*.html', ['html']);
    gulp.watch('resources/assets/**/*.scss', ['css']);
});

gulp.task('production', function() {
    gulp.src("public/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("public/css/"));
    gulp.src("public/js/*.js")
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest("public/js/"));
    return gulp.src('public/js/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['bowercopy', 'css', 'html', 'angular']);