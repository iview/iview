const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

// 编译less

function css(cb) {
    gulp.src("../src/styles/index.less")
        .pipe(less())
        .pipe(
            autoprefixer()
        )
        .pipe(cleanCSS())
        .pipe(rename("iview.css"))
        .pipe(gulp.dest("../dist/styles"));

    cb();
}

/* gulp.task("css", function() {
    gulp.src("../src/styles/index.less")
        .pipe(less())
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions", "ie > 8"]
            })
        )
        .pipe(cleanCSS())
        .pipe(rename("iview.css"))
        .pipe(gulp.dest("../dist/styles"));
}); */

// 拷贝字体文件
function fonts(cb) {
    gulp.src("../src/styles/common/iconfont/fonts/*.*").pipe(
        gulp.dest("../dist/styles/fonts")
    );
    cb();
}
/* gulp.task("fonts", function() {
    gulp.src("../src/styles/common/iconfont/fonts/*.*").pipe(
        gulp.dest("../dist/styles/fonts")
    );
}); */

gulp.task("default", gulp.series(css, fonts));
