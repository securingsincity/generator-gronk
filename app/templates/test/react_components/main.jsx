/** @jsx React.DOM **/

var React = require('react/addons');
var ReactTestUtils = require('react-test-utils');
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
        React.renderComponent(main, document.body);
        var button = ReactTestUtils.findRenderedDOMComponentWithClass(main,'btn');
        expect(button.props.children).toBe('James');
        main.setState({name: 'GRONK'});
        expect(button.props.children).toBe('GRONK');

    });
  });
