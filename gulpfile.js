/*
* Dependencias
*/
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  connect = require('gulp-connect'),
  historyApiFallback = require('connect-history-api-fallback');
  
/*
* Configuración de la tarea 'minificar'
*/

gulp.task('default', ['webserver']);  
gulp.task('minificar', ['minjs', 'mincss']);

gulp.task('minjs', function () {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('js/min/'))
});  

gulp.task('mincss', function() {
    gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/min/'))
});

gulp.task('webserver', function() {
  connect.server({
    hostname: '0.0.0.0',
    port: 5000,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback() ];
    }
  });
});	