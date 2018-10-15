import React from 'react';
import { ProgressIndicator, ProgressStep } from '../ProgressIndicator';
import ProgressIndicatorSkeleton from '../ProgressIndicator/ProgressIndicator.Skeleton';
import { shallow, mount } from 'enzyme';
describe('ProgressIndicator', function () {
  describe('Renders as expected', function () {
    var progress = React.createElement(ProgressIndicator, {
      className: "some-class",
      currentIndex: 3
    }, React.createElement(ProgressStep, {
      label: "label",
      description: "Step 1: Getting Started with Node.js"
    }), React.createElement(ProgressStep, {
      label: "label",
      description: "Step 2: Getting Started with Node.js"
    }), React.createElement(ProgressStep, {
      label: "label",
      description: "Step 3: Getting Started with Node.js"
    }), React.createElement(ProgressStep, {
      label: "label",
      description: "Step 4: Getting Started with Node.js"
    }), React.createElement(ProgressStep, {
      label: "label",
      description: "Step 5: Getting Started with Node.js"
    }), React.createElement(ProgressStep, {
      label: "label",
      description: "Step 6: Getting Started with Node.js"
    }));
    var list = shallow(progress);
    var mountedList = mount(progress);
    beforeEach(function () {
      mountedList.setProps({
        currentIndex: 3
      });
    });
    it('should be a ul element', function () {
      expect(list.find('ul').length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(list.hasClass('bx--progress')).toEqual(true);
      expect(list.hasClass('some-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(list.find(ProgressStep).length).toEqual(6);
    });
    it('should have the initial currentIndex from props', function () {
      expect(list.state().currentIndex).toEqual(3);
    });
    it('should update state when currentIndex is changed', function () {
      list.setProps({
        currentIndex: 1
      });
      expect(list.state().currentIndex).toEqual(1);
      list.setProps({
        currentIndex: 0
      });
      expect(list.state().currentIndex).toEqual(0);
    });
    it('should avoid updating state unless actual change in currentIndex is detected', function () {
      list.setProps({
        currentIndex: 1
      });
      list.setState({
        currentIndex: 2
      });
      list.setProps({
        currentIndex: 1
      });
      expect(list.state().currentIndex).toEqual(2);
    });
    describe('ProgressStep', function () {
      it('should render with correct base className', function () {
        expect(mountedList.find(ProgressStep).at(0).children().hasClass('bx--progress-step')).toEqual(true);
      });
      it('should render with a label', function () {
        expect(mountedList.find(ProgressStep).at(0).prop('label')).toEqual('label');
      });
      it('should render with a description', function () {
        expect(mountedList.find(ProgressStep).at(0).prop('description')).toEqual('Step 1: Getting Started with Node.js');
      });
      it('should render description in <title> node', function () {
        expect(mountedList.find('ProgressStep title').at(0).text()).toEqual('Step 1: Getting Started with Node.js');
      });
      describe('current', function () {
        it('should render a current ProgressStep with correct className', function () {
          expect(mountedList.find(ProgressStep).at(3).children().hasClass('bx--progress-step--current')).toEqual(true);
        });
        it('should render a current ProgressStep with correct props', function () {
          expect(mountedList.find(ProgressStep).at(3).prop('current')).toBe(true);
        });
      });
      describe('complete', function () {
        it('should render any completed ProgressSteps with correct className', function () {
          expect(mountedList.find(ProgressStep).at(0).children().hasClass('bx--progress-step--complete')).toEqual(true);
        });
        it('should render any completed ProgressSteps with correct props', function () {
          expect(list.find(ProgressStep).at(0).prop('complete')).toBe(true);
        });
      });
      describe('incomplete', function () {
        it('should render any incompleted ProgressSteps with correct className', function () {
          expect(mountedList.find(ProgressStep).at(5).children().hasClass('bx--progress-step--incomplete')).toEqual(true);
        });
        it('should render any incompleted ProgressSteps with correct props', function () {
          expect(list.find(ProgressStep).at(5).prop('complete')).toBe(false);
        });
      });
    });
  });
});
describe('ProgressIndicatorSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(ProgressIndicatorSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--progress')).toEqual(true);
    });
  });
});