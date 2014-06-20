module.exports = function (config) {
  config.set({
    frameworks: ['jasmine','browserify'],
    reporters: ['progress'],
    basePath: '',
    preprocessors: {'test/**/*': ['browserify']},
    files: [
      'test/**/*.js',
      'test/**/*.jsx'
    ],
        // Browserify config (all optional)
    browserify: {
      transform: ['reactify'],
      debug: true,
      watch: true,
    },
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
