const gulp = require("gulp");

gulp.task("copyallfile",async ()=>{
	gulp.src("./**/*").pipe(gulp.dest("d:\\phpStudy\\WWW\\DT"));
});

gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("d:\\phpStudy\\WWW\\DT"));
	});
});