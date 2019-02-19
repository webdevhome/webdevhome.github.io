import gulp from 'gulp';
import { buildCss } from './build-css';
import { buildHtml } from './build-html';
import { buildJs, watchJs } from './build-js';
import { runServer } from './serve';
import { never } from './utils';

function watchHtml () {
  gulp.watch(
    ['src/data/**/*', 'src/templates/**/*'],
    { ignoreInitial: false },
    buildHtml
  )
  return never
}

async function watchCss () {
  gulp.watch(
    ['src/css/**/*'],
    { ignoreInitial: false },
    buildCss
  )
  return never
}

export const serveTask = runServer
export const buildTask = gulp.parallel(buildHtml, buildCss, buildJs)
export const watchTask = gulp.parallel(watchHtml, watchCss, watchJs)
export const devTask = gulp.parallel(runServer, watchHtml, watchCss, watchJs)