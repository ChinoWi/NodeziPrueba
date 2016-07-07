var gulp =  require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');




gulp.task('css', function(){
gulp.src('src/ComponentsCss/styles.styl')
 .pipe(stylus({compress:true}))
 .pipe(gulp.dest('asset/css'))
 .pipe(connect.reload());
});


gulp.task('html',function(){
  gulp.src(['src/ComponentsCss/*.jade','src/ComponentsCss/info/*.jade','src/SomponentsCss/home/*.jade','src/ComponentsCss/contact/*.jade','src/ComponentsCss/question/*.jade'])
  .pipe(jade())
  .pipe(gulp.dest('templates/'))
  .pipe(connect.reload());
});





gulp.task('watch',function(){
	gulp.watch('src/ComponentsCss/**/*.styl',['css']),
	gulp.watch('src/ComponentsCss/**/*.jade',['html'])
	// gulp.watch('src/images/*.*',['images'])
});


gulp.task('default',['watch'])



