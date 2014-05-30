/** @jsx React.DOM */
var React = require('react'),
oboe = require('oboe');
global.$  = require('jquery');

var Main = require('./react_components/main.jsx')


React.renderComponent(<Main />, document.getElementById("content"));
