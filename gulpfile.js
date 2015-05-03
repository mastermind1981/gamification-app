var gulp = require('gulp');
var glob = require('glob');

var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');

gulp.task('css', function(){
	gulp.src('./assets/theme.*.less')
		.pipe(sourcemaps.init())
		.pipe(less({ compress:true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./deploy/assets'));
});

gulp.task('js', function(){
	var views = glob.sync('views/**/*.js').map(function(value){
		return value.replace('.js', '');
	});

	rjs({
		baseUrl: './',
		out: 'app.js',
		insertRequire:['app'],
		deps:['app'],
		include: ['libs/almond.js'].concat(views)
	})
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./deploy/'));
});