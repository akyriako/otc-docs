'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const menuUtils = require('./menu-utils-1e20f360.js');
const renderIcon = require('./render-icon-a46f6da1.js');

const telekomHeaderDataBackCompatCss = "/**\n * @license\n * Scale https://github.com/telekom/scale\n *\n * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG\n *\n * This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at https://mozilla.org/MPL/2.0/.\n */\n\n\nscale-telekom-header-data-back-compat .user-menu-mobile {\n  display: block;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop {\n  display: none;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop scale-menu-flyout {\n  display: flex;\n}\n\nscale-telekom-header-data-back-compat .user-menu-trigger {\n  position: relative;\n  left: 24px;\n}\n\n@media screen and (min-width: 640px) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);\n  }\n}\n\n@media screen and (min-width: 1040px) {\n  scale-telekom-header-data-back-compat .user-menu-mobile {\n    display: none;\n  }\n\n  scale-telekom-header-data-back-compat .user-menu-desktop {\n    display: block;\n  }\n}\n\ndia screen and (--xl) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);\n  }\n}\n";

const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
const TelekomHeaderDataBackCompat = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { shortName = 'Login', badge, badgeLabel, } = (readData(this.userNavigation) || []).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return (index.h("scale-telekom-header", { "app-name": this.appName, "app-name-link": this.appNameLink, "app-name-click": this.appNameClick, "logo-href": this.logoHref, "logo-title": this.logoTitle, "logo-hide-title": this.logoHideTitle }, !readData(this.sectorNavigation) ? null : (index.h("scale-telekom-nav-list", { slot: "meta-nav-external", variant: "meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
      return (index.h("scale-telekom-nav-item", null, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.addonNavigation) ? null : (index.h("scale-telekom-nav-list", { slot: "meta-nav", variant: "meta-nav", alignment: "right" }, readData(this.addonNavigation).map((item) => {
      return (index.h("scale-telekom-nav-item", null, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.mainNavigation) ? null : (index.h("scale-telekom-nav-list", { variant: "main-nav", slot: "main-nav" }, readData(this.mainNavigation).map((item) => {
      const { selected } = menuUtils.findSelected(readData(this.mainNavigation), this.activeRouteId);
      const rootNode = selected &&
        menuUtils.findRootNode(readData(this.mainNavigation), selected.id);
      const isActive = (itemId) => rootNode && rootNode.id === itemId;
      return (index.h("scale-telekom-nav-item", { active: isActive(item.id) }, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, index.h("span", null, item.name)), !item.children ? null : (index.h("scale-telekom-nav-flyout", { hover: true }, index.h("scale-telekom-mega-menu", null, item.children.map((child) => {
        return (index.h("scale-telekom-mega-menu-column", null, index.h("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
            if (typeof child.onClick === 'function') {
              child.onClick(event);
            }
          }, slot: "heading" }, child.name), !child.children ? null : (index.h("ul", null, child.children.map((grandChild) => {
          return (index.h("li", null, index.h("a", { href: grandChild.href ||
              'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
              if (typeof grandChild.onClick ===
                'function') {
                grandChild.onClick(event);
              }
            } }, grandChild.name)));
        })))));
      }))))));
    }))), !readData(this.iconNavigation) &&
      !readData(this.userNavigation) ? null : (index.h("scale-telekom-nav-list", { variant: "functions", slot: "functions", alignment: "right" }, readData(this.userNavigation).length > 0 && (index.h("scale-telekom-nav-item", { class: "user-menu-desktop" }, index.h("a", { href: "javascript:void(0);", ref: (el) => (this.userMenuDesktopLink = el), onKeyDown: (e) => {
        if ([' ', 'Enter', 'Escape'].includes(e.key)) {
          e.preventDefault();
          this.userMenuDesktopTrigger.click();
        }
      }, onClick: (e) => {
        e.stopPropagation();
        this.userMenuDesktopTrigger.click();
      } }, index.h("scale-menu-flyout", { direction: "bottom-left" }, badge ? (index.h("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true }, index.h("scale-icon-user-file-user", null, " "))) : (index.h("scale-icon-user-file-user", null, " ")), index.h("scale-menu-flyout-list", null, index.h("app-navigation-user-menu", { hide: () => {
        this.userMenuDesktopTrigger.click();
        this.userMenuDesktopLink.focus();
      }, navigation: readData(this.userNavigation) })), index.h("div", { slot: "trigger", class: "user-menu-trigger", ref: (el) => (this.userMenuDesktopTrigger = el) }))))), readData(this.userNavigation).length > 0 && (index.h("scale-telekom-nav-item", { class: "user-menu-mobile" }, index.h("button", { ref: (el) => {
        this.userMenuMobileTrigger = el;
      } }, index.h("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true }, index.h("scale-icon-user-file-user", null, " "))), index.h("scale-telekom-nav-flyout", { variant: "mobile" }, index.h("scale-telekom-mobile-flyout-canvas", null, index.h("app-navigation-user-menu", { slot: "mobile-main-nav", hide: () => {
        this.userMenuMobileTrigger.click();
        this.userMenuMobileTrigger.focus();
      }, navigation: readData(this.userNavigation) }))))), (readData(this.iconNavigation) || [])
      .filter(({ id }) => id !== 'menu')
      .map((item) => {
      return (index.h("scale-telekom-nav-item", null, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.badgeLabel ? (index.h("scale-badge", { count: item.badgeCount, label: item.badgeLabel, "label-visually-hidden": item.labelVisuallyHidden, "aria-label-translation": item.ariaLabelTranslation }, renderIcon.renderIcon({
        tag: `scale-icon-${item.icon}`,
        attributes: {},
      }))) : (renderIcon.renderIcon({
        tag: `scale-icon-${item.icon}`,
        attributes: {},
      })))));
    }), !readData(this.mainNavigation) &&
      !readData(this.sectorNavigation) &&
      !readData(this.addonNavigation) ? null : (index.h("scale-telekom-nav-item", { "hide-on-desktop": true }, index.h("button", null, index.h("scale-badge", null, index.h("scale-icon-action-menu", null))), index.h("scale-telekom-nav-flyout", { variant: "mobile" }, index.h("scale-telekom-mobile-flyout-canvas", { "app-name": this.appName, "app-name-link": this.appNameLink || 'javascript:void(0);', "app-name-click": (event) => {
        if (typeof this.appNameClick === 'function') {
          this.appNameClick(event);
        }
      } }, !readData(this.mainNavigation) ? null : (index.h("scale-telekom-mobile-menu", { slot: "mobile-main-nav" }, readData(this.mainNavigation).map((item) => {
      const { selected, parent } = menuUtils.findSelected(readData(this.mainNavigation), this.activeRouteId);
      const rootNode = selected &&
        menuUtils.findRootNode(readData(this.mainNavigation), selected.id);
      const isRootOpen = (itemId) => rootNode &&
        rootNode.id === itemId &&
        itemId !== this.activeRouteId;
      const isActive = (itemId) => itemId === this.activeRouteId;
      return (index.h("scale-telekom-mobile-menu-item", { open: isRootOpen(item.id), active: isActive(item.id) }, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name), !item.children
        ? null
        : item.children.map((child) => {
          return (index.h("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(child.id), open: parent && parent.id === child.id }, index.h("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
              if (typeof child.onClick ===
                'function') {
                child.onClick(event);
              }
            } }, child.name), !child.children
            ? null
            : child.children.map((grandChild) => (index.h("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(grandChild.id) }, index.h("a", { href: grandChild.href ||
                'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
                if (typeof grandChild.onClick ===
                  'function') {
                  grandChild.onClick(event);
                }
              } }, grandChild.name))))));
        })));
    }))), !readData(this.sectorNavigation) ? null : (index.h("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
      return (index.h("scale-telekom-nav-item", null, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.addonNavigation) ? null : (index.h("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav", alignment: "left" }, readData(this.addonNavigation).map((item) => {
      return (index.h("scale-telekom-nav-item", null, index.h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    })))))))))));
  }
};
TelekomHeaderDataBackCompat.style = telekomHeaderDataBackCompatCss;

exports.scale_telekom_header_data_back_compat = TelekomHeaderDataBackCompat;
