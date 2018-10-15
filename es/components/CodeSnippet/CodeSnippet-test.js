import React from 'react';
import CodeSnippet from '../CodeSnippet';
import CodeSnippetSkeleton from '../CodeSnippet/CodeSnippet.Skeleton';
import { shallow } from 'enzyme';
describe('Code Snippet', function () {
  describe('Renders as expected', function () {
    var snippet = shallow(React.createElement(CodeSnippet, {
      className: "some-class",
      type: "single"
    }, 'node -v'));
    it('should use the appropriate snippet class', function () {
      expect(snippet.hasClass('bx--snippet')).toEqual(true);
      expect(snippet.hasClass('bx--snippet--single')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(snippet.find('.bx--snippet-container').length).toBe(1);
    });
    it('should all for custom classes to be applied', function () {
      expect(snippet.hasClass('some-class')).toEqual(true);
    });
  });
});
describe('CodeSnippetSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(CodeSnippetSkeleton, {
      type: "single"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet--single')).toEqual(true);
    });
  });
});