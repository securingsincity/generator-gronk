var React = require('react');


module.exports = React.createClass({
  oClick: function(e) {
    console.log('Getting GRONK');
  },
  render: function () {
    return (
      <div className="ui-builder">
          This is UI builder container. blah blah  blahasdf
          <button onClick={this.oClick}>Click Me!</button>
      </div>
    );
  }
});
