/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
     gulp.src('js/source/*.js')
     .pipe(concat('todo.js'))
     .pipe(uglify())
     .pipe(gulp.dest('js/build/'))
});

//Tarea para comprimir archivos css
gulp.task('comprimir-css', function() {

    //Ruta de la carpeta css apuntando a los archivos `.css`
     return gulp.src('css/css/*.css')
    
    //Comprime los archivos `.css`
      .pipe(cleanCSS({compatibility: 'ie8'}))
    
    //Carpeta donde se guardará el archivo `.css` comprimido
      .pipe(gulp.dest('css/dest'))
    //Mensaje gracias al plugin `gulp-notify`
      .pipe(notify("Tarea comprimir-css terminada!")); 
    });
    
    //Vuelve a ejecutar la tarea cuando se modifica algún archivo 
    gulp.task('watch', function(){
          gulp.watch('./css/**/*', ['comprimir-css']);
    });
    
    //Tarea por defecto
    gulp.task('default',['watch', 'comprimir-css']);