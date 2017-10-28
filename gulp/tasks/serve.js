'use strict';

var path = require('path');

var serveTask = function (gulp, plugins, config, helpers, generator_config) {

  var startTasks = ['styles-watch', 'assets-watch', 'vendor-watch'];
  gulp.task('vendor-rebuild-template', ['vendor-watch'], function () {
    gulp.start('templates-watch');
  });

  gulp.task('serve', startTasks, function() {

    gulp.start('templates-watch');

    var browserSyncConfig = {
      server: './dist',
      ghostMode: false,
      online: true,
      notify: false
    }

    plugins.browserSync.init(browserSyncConfig);

    gulp.watch(path.join(config.src.base, config.src.styles), ['styles-watch']);

    gulp.watch(config.src.templatesWatch, ['templates-watch']);
    gulp.watch(path.join(config.src.base, config.src.vendorConfig), ['vendor-rebuild-template']);

    gulp.watch(path.join(config.src.base, config.src.assets), ['assets-watch']);

  });
};

module.exports = serveTask;
