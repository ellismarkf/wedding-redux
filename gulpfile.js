var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')
var browserSync = require('browser-sync')
var reload = browserSync.reload

gulp.task('less', () => {
	return gulp.src('./style/index.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'style', 'includes') ]
		}))
		.pipe(gulp.dest(__dirname))
		.pipe(reload({ stream: true }))
})

gulp.task('serve', ['less'], () => {
	browserSync({
		server: {
			baseDir: __dirname
		}
	})
	gulp.watch('./style/**/*.less', ['less'])
	gulp.watch('*.html').on('change', reload)
})


gulp.task('default', ['less', 'serve'])