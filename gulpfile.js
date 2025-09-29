import { src, dest, watch, series } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";

const gulpSassCompiler = gulpSass(sass);

function buildStyles() {
  return src("./src/styles/*.scss")
    .pipe(
      gulpSassCompiler().on("error", function (err) {
        console.error("Sass Error:", err.message);
        console.error("File:", err.file);
        console.error("Line:", err.line);
        console.error("Column:", err.column);
        this.emit("end");
      })
    )
    .pipe(dest("src/styles/css"));
}

function watchTask() {
  watch(["src/styles/*.scss"], buildStyles);
}

export default series(buildStyles, watchTask);
