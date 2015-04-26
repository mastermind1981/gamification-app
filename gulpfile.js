var gulp = require('gulp');
var glob = require('glob');

var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');

gulp.task('js', function(){
	var views = glob.sync('views/**/*.js').map(function(value){
		return value.replace('.js', '');
	});

	rjs({
		baseUrl: './',
		out: 'app.js',
		paths: { text: 'libs/text' },
		include: ['libs/almond.js'].concat(views)
	})
	//.pipe(uglify())
	.pipe(gulp.dest('./'));
});