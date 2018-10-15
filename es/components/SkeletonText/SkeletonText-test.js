import React from 'react';
import SkeletonText from '../SkeletonText';
import { shallow } from 'enzyme';
describe('SkeletonText', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(SkeletonText, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton__text')).toEqual(true);
    });
  });
});
describe('SkeletonText Heading', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(SkeletonText, {
      heading: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton__heading')).toEqual(true);
    });
  });
});