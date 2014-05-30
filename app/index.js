'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GrunkGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You are about to get GRONK\'D . It\'s as tight as the spiritual connection from Brady\'s rocket of an arm to Gronk\'s massive hands!'));

    var prompts = [{
      name: 'project',
      message: 'What is this project\'s name?'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Cool Cool Cool. What more would you like?',
      choices: [{
        name: 'Sass with Compass',
        value: 'includeSass',
        checked: true
      }, {
        name: 'Bootstrap',
        value: 'includeBootstrap',
        checked: true
      }, {
        name: 'Modernizr',
        value: 'includeModernizr',
        checked: true
      }, {
        name: 'HTML template - Jade',
        value: 'includeJade',
        checked: true
      }, {
        name: 'CoffeeScript for JavaScript -- can we advise against this because well FERN says its lame',
        value: 'includeCoffeeScript',
        checked: false
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features;

      this.projectName = answers.project;

      function hasFeature(feat) { return features.indexOf(feat) !== -1; }

      if (hasFeature('includeCoffeeScript')) {
        console.log(chalk.green('Why would you pick coffescript. Fern hates that! '));
      }
      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.includeSass = hasFeature('includeSass');
      this.includeBootstrap = hasFeature('includeBootstrap');
      this.includeModernizr = hasFeature('includeModernizr');
      this.includeJade = hasFeature('includeJade');
      this.includeCoffeeScript = hasFeature('includeCoffeeScript');

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/scripts');
    this.mkdir('app/styles');
    this.mkdir('app/images');
    this.mkdir('app/scripts/react_components');


    this.template('_package.json', 'package.json');
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('main.scss', 'app/styles/main.scss');

    this.copy('index.html', 'app/index.html');
    this.copy('react_components/main.jsx', 'app/scripts/react_components/main.jsx');
    this.copy('app.js', 'app/scripts/app.js');
    this.copy('favicon.ico', 'app/favicon.ico');
    this.copy('bowerrc', '.bowerrc');
    this.copy('robots.txt', 'app/robots.txt');

  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = GrunkGenerator;
