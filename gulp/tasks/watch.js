var gulp = require ('gulp'),
    browserSync = require('browser-sync').create(),
    watch = require('gulp-watch');
        
        
gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
});

gulp.task('html', function() {
	browserSync.reload();
});