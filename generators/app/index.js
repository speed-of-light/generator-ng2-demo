'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('ng2 demo app') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Demo name',
      store: true,
      default: 'Angular 2 Demo App in 1 second'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('.'),
      this.destinationPath('.')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
