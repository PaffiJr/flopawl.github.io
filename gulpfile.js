const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function dev() {
	// 1. Where is the scss file
	return gulp.src('./assets/scss/**/*.scss')
	// 2. Pass it through sass compiler
		.pipe(sass().on('error', sass.logError))
	// 3. Where to save the compiled CSS
		.pipe(gulp.dest('./assets/css'))
	//4.  Stream changes to all Browsers
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./assets/scss/**/*.scss', dev);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

exports.dev = dev;
exports.watch = watch;