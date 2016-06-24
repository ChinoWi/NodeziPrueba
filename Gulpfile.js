var gulp =  require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');


gulp.task('css', function(){
gulp.src('src/ComponentsCss/styles.styl')
 .pipe(stylus({compress:true}))
 .pipe(gulp.dest('asset/css'))
});


gulp.task('html',function(){
  gulp.src(['src/ComponentsCss/*.jade','src/ComponentsCss/info/*.jade','src/SomponentsCss/home/*.jade','src/ComponentsCss/contact/*.jade','src/ComponentsCss/question/*.jade'])
  .pipe(jade())
  .pipe(gulp.dest('templates/'))
});



gulp.task('watch',function(){
	gulp.watch('src/ComponentsCss/**/*.styl',['css']),
	gulp.watch('src/ComponentsCss/**/*.jade',['html'])
});


gulp.task('default',['watch'])



