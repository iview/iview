var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
     gulp.src('../src/styles/index.less')
         .pipe(less())
         .pipe(autoprefixer({
            browsers: ['last 2 versions']
         }))
         .pipe(minifyCSS())
         .pipe(rename('iview.css'))
         .pipe(gulp.dest('../dist/styles'))
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'))
});

gulp.task('default', ['css', 'fonts']);
