/**
 * Created by Vadym Yatsyuk on 17/04/16
 */
"use strict";

import gulp from 'gulp';
import jasmine from 'gulp-jasmine';

const jsPath = './src/**/*.js';

gulp.task('test', () => {
  gulp.src(jsPath)
    .pipe(jasmine({
      errorOnFail: false
    }));
});

gulp.task('default', ['test'], () => {
  gulp.watch(jsPath, ['test']);
});