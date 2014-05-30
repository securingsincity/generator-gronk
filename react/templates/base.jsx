var React = require('react');


module.exports = React.createClass({
  oClick: function(e) {
    console.log('Getting GRONK');
  },
  render: function () {
    return (
      <div>
          Hi there!<br/>
          <button onClick={this.oClick}>Click Me!</button>
      </div>
    );
  }
});
