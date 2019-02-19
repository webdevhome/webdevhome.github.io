import gulp from 'gulp';
import webpack from 'webpack-stream';
import { getPath } from './utils';
import { getWebpackConfig } from './webpack';

export const buildJs = getBuildJs(true)
export const watchJs = getBuildJs(false)

export function getBuildJs(production) {
  return function buildJs() {
    return gulp.src(getPath('src/js/index.js'))
      .pipe(webpack(getWebpackConfig(production)))
      .pipe(gulp.dest('.'))
  }
}