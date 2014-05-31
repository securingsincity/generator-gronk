/** @jsx React.DOM */
var React = require('react/addons');
var Main = require('./react_components/main.jsx');
global.$  = require('jquery');


React.renderComponent(<Main name='Click Me'/>, document.getElementById("content"));
