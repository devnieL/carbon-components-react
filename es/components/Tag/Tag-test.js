import React from 'react';
import Tag from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { shallow } from 'enzyme';
describe('Tag', function () {
  describe('Renders as expected', function () {
    it('should render with the appropriate type', function () {
      var tag = shallow(React.createElement(Tag, {
        type: "beta"
      }));
      expect(tag.hasClass('bx--tag')).toEqual(true);
      expect(tag.hasClass('bx--tag--beta')).toEqual(true);
    });
    it('should provide a default label based on the type', function () {
      var tag = shallow(React.createElement(Tag, {
        type: "beta"
      }));
      expect(tag.text()).toEqual('Beta');
      tag.setProps({
        type: 'ibm'
      });
      expect(tag.text()).toEqual('IBM');
    });
  });
  it('should allow for a custom label', function () {
    var tag = shallow(React.createElement(Tag, {
      type: "beta"
    }, "New Version!"));
    expect(tag.text()).toEqual('New Version!');
  });
  it('should support extra class names', function () {
    var tag = shallow(React.createElement(Tag, {
      type: "beta",
      className: "extra-class"
    }));
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
describe('TagSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(TagSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--tag')).toEqual(true);
    });
  });
});