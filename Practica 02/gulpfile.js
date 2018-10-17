/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
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

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {

    //Ruta de la carpeta sass apuntando a los archivos `.scss`
     return gulp.src('./css/scss/**/*.scss') 
    
    //Compila los archivos `.scss` y muestra posibles errores
      .pipe(sass().on('error', sass.logError))  
    
    //Carpeta donde se guardaran los archivos `.css` compilado
     .pipe(gulp.dest('./css/css'))
    
    //Mensaje gracias al plugin `gulp-notify`
    .pipe(notify("Tarea sass terminada!"));
});
    
//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
    gulp.watch('./sass/**/*', ['sass']);
});

//Tarea por defecto
gulp.task('default',['watch', 'sass']);