function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { iconCheckmarkSolid, iconInfoSolid, iconErrorSolid, iconWarningSolid, iconClose } from 'carbon-icons';
import Icon from '../Icon';
import Notification, { NotificationButton, NotificationTextDetails, ToastNotification, InlineNotification } from '../Notification';
import { shallow, mount } from 'enzyme';
describe('NotificationButton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NotificationButton, {
      className: "some-class"
    }));
    it('renders given className', function () {
      expect(wrapper.hasClass('some-class')).toBe(true);
    });
    it('renders only one Icon', function () {
      var icon = wrapper.find('Icon');
      expect(icon.length).toEqual(1);
    });
    it('renders correct Icon', function () {
      var icon = wrapper.find('Icon');
      expect(icon.props().icon).toEqual(iconClose);
    });
    describe('When notificationType equals "toast"', function () {
      it('button should have correct className by default', function () {
        expect(wrapper.hasClass('bx--toast-notification__close-button')).toBe(true);
      });
      it('icon should have correct className by default', function () {
        var icon = wrapper.find('Icon');
        expect(icon.hasClass('bx--toast-notification__close-icon')).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('button should have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass('bx--inline-notification__close-button')).toBe(true);
      });
      it('icon should have correct className', function () {
        var icon = wrapper.find('Icon');
        expect(icon.hasClass('bx--inline-notification__close-icon')).toBe(true);
      });
    });
  });
});
describe('NotificationTextDetails', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NotificationTextDetails, null));
    describe('When notificationType equals "toast"', function () {
      it('div shoudld have correct className by default', function () {
        expect(wrapper.hasClass('bx--toast-notification__details')).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('div shoudld have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass('bx--inline-notification__text-wrapper')).toBe(true);
      });
    });
  });
});
describe('ToastNotification', function () {
  describe('Renders as expected', function () {
    var toast = shallow(React.createElement(ToastNotification, {
      kind: "error",
      title: "this is a title",
      subtitle: "this is a subtitle",
      caption: "this is a caption"
    }));
    it('renders itself', function () {
      expect(toast.length).toEqual(1);
    });
    it('renders HTML for toast notifications when caption exists', function () {
      expect(toast.hasClass('bx--toast-notification')).toBe(true);
    });
    it('adds extra classes via className', function () {
      toast.setProps({
        className: 'extra-class'
      });
      expect(toast.hasClass('extra-class')).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        toast.setProps({
          kind: kind
        });
        expect(toast.hasClass("bx--toast-notification--".concat(kind))).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(toast.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      toast.setProps({
        kind: 'success'
      });
      expect(toast.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle and caption', function () {
      toast.setProps({
        subtitle: React.createElement("button", null),
        caption: React.createElement("button", null)
      });
      expect(toast.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      expect(mountedToast.state().open).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      mountedToast.find('button').simulate('click');
      expect(mountedToast.state().open).toEqual(false);
    });
    it('renders null when open state is false', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      mountedToast.setState({
        open: false
      });
      expect(mountedToast.html()).toBeNull();
    });
  });
});
describe('InlineNotification', function () {
  describe('Renders as expected', function () {
    var inline = shallow(React.createElement(InlineNotification, {
      title: "this is a title",
      subtitle: "this is a subtitle",
      kind: "error"
    }));
    it('renders itself', function () {
      expect(inline.length).toEqual(1);
    });
    it('renders success notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.find(Icon).some({
        icon: iconCheckmarkSolid
      })).toBe(true);
    });
    it('renders error notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'error'
      });
      expect(inline.find(Icon).some({
        icon: iconErrorSolid
      })).toBe(true);
    }); // removed because of a11y warning icon workaround, depending on TODO: for @carbon/icons-react
    // it('renders warning notification with matching kind and <icon name=""> values', () => {
    //   inline.setProps({ kind: 'warning' });
    //   expect(inline.find(Icon).some({ icon: iconWarningSolid })).toBe(true);
    // });

    it('renders warning notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'warning'
      });
      expect(inline.children('.bx--inline-notification__details').exists()).toBe(true);
    });
    it('renders info notification with matching kind value but without <icon name="">', function () {
      inline.setProps({
        kind: 'info'
      });
      expect(inline.find(Icon).some({
        icon: iconInfoSolid
      })).toBe(true);
    });
    it('renders HTML for inline notifications when caption does not exist', function () {
      expect(inline.hasClass('bx--inline-notification')).toBe(true);
    });
    it('adds extra classes via className', function () {
      inline.setProps({
        className: 'extra-class'
      });
      expect(inline.hasClass('extra-class')).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        inline.setProps({
          kind: kind
        });
        expect(inline.hasClass("bx--inline-notification--".concat(kind))).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(inline.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle', function () {
      inline.setProps({
        subtitle: React.createElement("button", null)
      });
      expect(inline.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var mountedInline = mount(React.createElement(InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      expect(mountedInline.state().open).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var mountedInline = mount(React.createElement(Notification, props));
      mountedInline.find('button').simulate('click');
      expect(mountedInline.state().open).toEqual(false);
    });
    it('renders null when open state is false', function () {
      var mountedInline = mount(React.createElement(InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      mountedInline.setState({
        open: false
      });
      expect(mountedInline.html()).toBeNull();
    });
  });
}); // Deprecated

var props = {
  kind: 'success',
  title: 'title',
  subtitle: 'subtitle',
  iconDescription: 'description'
};
describe('[Deprecated]: Notification', function () {
  describe('Renders as expected', function () {
    var toast = shallow(React.createElement(Notification, _extends({}, props, {
      caption: "caption"
    })));
    var inline = shallow(React.createElement(Notification, props));
    var mountedToast = mount(React.createElement(Notification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(Notification, props));
    describe('HTML', function () {
      it('renders itself', function () {
        expect(toast.length).toEqual(1);
        expect(inline.length).toEqual(1);
      });
      it('renders checkmark--solid icon for success inline notification', function () {
        var icon = inline.find({
          icon: iconCheckmarkSolid
        });
        expect(icon.props().icon).toEqual(iconCheckmarkSolid);
      });
      it('renders error notification with matching kind and <icon name=""> values', function () {
        inline.setProps({
          kind: 'error'
        });
        expect(inline.find(Icon).some({
          icon: iconErrorSolid
        })).toBe(true);
      });
      it('renders warning notification with matching kind and <icon name=""> values', function () {
        inline.setProps({
          kind: 'warning'
        });
        expect(inline.find(Icon).some({
          icon: iconWarningSolid
        })).toBe(true);
      });
      it('renders info notification with matching kind and <icon name=""> values', function () {
        inline.setProps({
          kind: 'info'
        });
        expect(inline.find(Icon).some({
          icon: iconInfoSolid
        })).toBe(true);
      });
      it('renders HTML for toast notifications when caption exists', function () {
        expect(toast.hasClass('bx--toast-notification')).toBe(true);
      });
      it('renders HTML for inline notifications when caption does not exist', function () {
        expect(inline.hasClass('bx--inline-notification')).toBe(true);
      });
    });
    describe('className', function () {
      it('adds extra classes via className', function () {
        toast.setProps({
          className: 'extra-class'
        });
        inline.setProps({
          className: 'extra-class'
        });
        expect(toast.hasClass('extra-class')).toBe(true);
        expect(inline.hasClass('extra-class')).toBe(true);
      });
      it('interpolates matching className based on kind prop', function () {
        var kinds = ['error', 'info', 'success', 'warning'];
        kinds.forEach(function (kind) {
          inline.setProps({
            kind: kind
          });
          toast.setProps({
            kind: kind
          });
          expect(inline.hasClass("bx--inline-notification--".concat(kind))).toEqual(true);
          expect(toast.hasClass("bx--toast-notification--".concat(kind))).toEqual(true);
        });
      });
    });
    describe('other props', function () {
      it('has [role="alert"] on wrapping <div>', function () {
        expect(toast.props().role).toEqual('alert');
        expect(inline.props().role).toEqual('alert');
      });
      it('sets a new kind when passed in via props', function () {
        toast.setProps({
          kind: 'success'
        });
        inline.setProps({
          kind: 'success'
        });
        expect(toast.props().kind).toEqual('success');
        expect(inline.props().kind).toEqual('success');
      });
      it('sets a new title when passed in via props', function () {
        mountedToast.setProps({
          title: 'new-title'
        });
        mountedInline.setProps({
          title: 'new-title'
        });
        expect(mountedToast.props().title).toEqual('new-title');
        expect(mountedInline.props().title).toEqual('new-title');
      });
      it('sets a new subtitle when passed in via props', function () {
        mountedToast.setProps({
          subtitle: 'new-subtitle'
        });
        mountedInline.setProps({
          subtitle: 'new-subtitle'
        });
        expect(mountedToast.props().subtitle).toEqual('new-subtitle');
        expect(mountedInline.props().subtitle).toEqual('new-subtitle');
      });
      it('sets a new caption when passed in via props', function () {
        mountedToast.setProps({
          caption: 'new-caption'
        });
        expect(mountedToast.props().caption).toEqual('new-caption');
      });
      it('sets a new iconDescription when passed in via props', function () {
        expect(mountedToast.props().iconDescription).toEqual('description');
        expect(mountedInline.props().iconDescription).toEqual('description');
      });
    });
  });
});
describe('events and state', function () {
  it('initial open state set to true', function () {
    var mountedToast = mount(React.createElement(Notification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(Notification, props));
    expect(mountedToast.state().open).toBe(true);
    expect(mountedInline.state().open).toBe(true);
  });
  it('sets open state to false when close button is clicked', function () {
    var mountedToast = mount(React.createElement(Notification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(Notification, props));
    mountedToast.find('button').simulate('click');
    mountedInline.find('button').simulate('click');
    expect(mountedToast.state().open).toEqual(false);
    expect(mountedInline.state().open).toEqual(false);
  });
  it('close button is not shown if hideCloseButton prop set', function () {
    var mountedToast = mount(React.createElement(Notification, _extends({}, props, {
      hideCloseButton: true
    })));
    expect(mountedToast.find('button')).toHaveLength(0);
  });
  it('renders null when open state is false', function () {
    var mountedToast = mount(React.createElement(Notification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(Notification, props));
    mountedToast.setState({
      open: false
    });
    mountedInline.setState({
      open: false
    });
    expect(mountedToast.html()).toBeNull();
    expect(mountedInline.html()).toBeNull();
  });
});