const gulp = require("gulp");

gulp.task("copyallfile",async ()=>{
	gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\DT"));
});

gulp.task("watchall",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\DT"));
});