var React = require('react');


module.exports = React.createClass({
   getInitialState: function() {
    return {name: 'Click Me!'};
  },
  oClick: function(e) {
    this.setState({'name': 'GRONK'});
  },
  render: function () {
    return (
      <div className="ui-builder">
          This is UI builder container. blah blah  blahasdf
          <button className="btn" onClick={this.oClick}>{this.state.name}</button>
      </div>
    );
  }
});
