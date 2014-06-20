/** @jsx React.DOM **/

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var Main = require('../../app/scripts/react_components/main.jsx');

//var ReactTestUtils = React.addons.ReactTestUtils;

  describe("Main Test",function(){
    it("Check main to be a component", function () {
      var main = <Main name='James'/>;
      expect(Main).toBeDefined();
      expect(ReactTestUtils.isCompositeComponent(main)).toBe(true);
    });
    it("check on state change", function() {
        expect(Main).toBeDefined();
        var main = <Main name='James'/>;
        ReactTestUtils.renderIntoDocument(main);
        var button = ReactTestUtils.findRenderedDOMComponentWithTag(main,'button');
        expect(button.getDOMNode().textContent).toEqual('Click Me!');
        ReactTestUtils.Simulate.click(button.getDOMNode());
        expect(button.getDOMNode().textContent).toBe('GRONK');

    });
  });
