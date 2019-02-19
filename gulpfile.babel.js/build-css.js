import gulp from 'gulp'
import postcss from 'gulp-postcss'
import { getPath } from './utils';
import { postcssPlugins } from './postcss';

export function buildCss() {
  return gulp.src(getPath('src/css/index.css'))
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(getPath('.')))
}