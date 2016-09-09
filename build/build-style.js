/**
 * 编译样式文件
 * iview.css 是基础组件css
 * iview.pack.css 是套装的全部css
 * iview.all.css 是基础组件加套装的全部css
 * packages/*.css 是某个套装的css
 * article.css 是文章排版的css
 * */
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// 组件的基础css
gulp.task('base', function () {
     gulp.src('../styles/index.less')
         .pipe(less())
         .pipe(minifyCSS())
         .pipe(rename('iview.css'))
         .pipe(gulp.dest('../dist/styles'))
});

// 字体
gulp.task('fonts', function () {
    gulp.src('../styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'))
});

// 文章排版
gulp.task('article', function () {
    gulp.src('../styles/article/index.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('article.css'))
        .pipe(gulp.dest('../dist/styles'))
});

// 套装的全部css
gulp.task('pack-all', function () {
    gulp.src('../styles/package.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('iview.pack.css'))
        .pipe(gulp.dest('../dist/styles'))
});

// 每个套装的css
gulp.task('pack', function () {
    gulp.src(['../styles/packages/*.less', '!../styles/packages/index.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename({
            prefix: 'iview.pack.'
        }))
        .pipe(gulp.dest('../dist/styles/packages'))
});

// 全部css(包含组件和套装)
gulp.task('all', function () {
    gulp.src(['../styles/index.less', '../styles/package.less'])
        .pipe(less())
        .pipe(concat('iview.all.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('../dist/styles'))
});

gulp.task('default', ['base', 'fonts', 'article', 'pack-all', 'pack', 'all']);