module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
     reporters: ['progress'],
       basePath: '',
    files: [
      'dist/app-tests.js'
    ]
  });
};
