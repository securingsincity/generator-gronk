'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var OboeGenerator = module.exports = function OboeGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.modelName = arguments[0][0];

};

util.inherits(OboeGenerator, yeoman.generators.NamedBase);

OboeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {name : "modelName", message : "name of the js file? ", default : this.modelName},

  ];

  this.prompt(prompts, function (props) {
    this.modelName = props.modelName;

    cb();

  }.bind(this));
};


OboeGenerator.prototype.files = function files() {
  this.template('base.js',"app/scripts/oboe_components/"+this.modelName+".js");
};
