'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ReactGenerator = module.exports = function ReactGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
	this.modelName = arguments[0][0];

};

util.inherits(ReactGenerator, yeoman.generators.NamedBase);

ReactGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "modelName", message : "name of the jsx file? ", default : this.modelName},

	];

	this.prompt(prompts, function (props) {
		this.modelName = props.modelName;

		cb();

	}.bind(this));
};


ReactGenerator.prototype.files = function files() {
	this.template('base.jsx',"app/scripts/react_components/"+this.modelName+".jsx");
};
