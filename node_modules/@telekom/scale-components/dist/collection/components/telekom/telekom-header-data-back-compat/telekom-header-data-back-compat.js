/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, h, Prop } from '@stencil/core';
import { findRootNode, findSelected } from '../../../utils/menu-utils';
import { renderIcon } from '../../../utils/render-icon';
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
export class TelekomHeaderDataBackCompat {
  render() {
    const { shortName = 'Login', badge, badgeLabel, } = (readData(this.userNavigation) || []).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return (h("scale-telekom-header", { "app-name": this.appName, "app-name-link": this.appNameLink, "app-name-click": this.appNameClick, "logo-href": this.logoHref, "logo-title": this.logoTitle, "logo-hide-title": this.logoHideTitle },
      !readData(this.sectorNavigation) ? null : (h("scale-telekom-nav-list", { slot: "meta-nav-external", variant: "meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
        return (h("scale-telekom-nav-item", null,
          h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
              if (typeof item.onClick === 'function') {
                item.onClick(event);
              }
            } }, item.name)));
      }))),
      !readData(this.addonNavigation) ? null : (h("scale-telekom-nav-list", { slot: "meta-nav", variant: "meta-nav", alignment: "right" }, readData(this.addonNavigation).map((item) => {
        return (h("scale-telekom-nav-item", null,
          h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
              if (typeof item.onClick === 'function') {
                item.onClick(event);
              }
            } }, item.name)));
      }))),
      !readData(this.mainNavigation) ? null : (h("scale-telekom-nav-list", { variant: "main-nav", slot: "main-nav" }, readData(this.mainNavigation).map((item) => {
        const { selected } = findSelected(readData(this.mainNavigation), this.activeRouteId);
        const rootNode = selected &&
          findRootNode(readData(this.mainNavigation), selected.id);
        const isActive = (itemId) => rootNode && rootNode.id === itemId;
        return (h("scale-telekom-nav-item", { active: isActive(item.id) },
          h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
              if (typeof item.onClick === 'function') {
                item.onClick(event);
              }
            } },
            h("span", null, item.name)),
          !item.children ? null : (h("scale-telekom-nav-flyout", { hover: true },
            h("scale-telekom-mega-menu", null, item.children.map((child) => {
              return (h("scale-telekom-mega-menu-column", null,
                h("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
                    if (typeof child.onClick === 'function') {
                      child.onClick(event);
                    }
                  }, slot: "heading" }, child.name),
                !child.children ? null : (h("ul", null, child.children.map((grandChild) => {
                  return (h("li", null,
                    h("a", { href: grandChild.href ||
                        'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
                        if (typeof grandChild.onClick ===
                          'function') {
                          grandChild.onClick(event);
                        }
                      } }, grandChild.name)));
                })))));
            }))))));
      }))),
      !readData(this.iconNavigation) &&
        !readData(this.userNavigation) ? null : (h("scale-telekom-nav-list", { variant: "functions", slot: "functions", alignment: "right" },
        readData(this.userNavigation).length > 0 && (h("scale-telekom-nav-item", { class: "user-menu-desktop" },
          h("a", { href: "javascript:void(0);", ref: (el) => (this.userMenuDesktopLink = el), onKeyDown: (e) => {
              if ([' ', 'Enter', 'Escape'].includes(e.key)) {
                e.preventDefault();
                this.userMenuDesktopTrigger.click();
              }
            }, onClick: (e) => {
              e.stopPropagation();
              this.userMenuDesktopTrigger.click();
            } },
            h("scale-menu-flyout", { direction: "bottom-left" },
              badge ? (h("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true },
                h("scale-icon-user-file-user", null, " "))) : (h("scale-icon-user-file-user", null, " ")),
              h("scale-menu-flyout-list", null,
                h("app-navigation-user-menu", { hide: () => {
                    this.userMenuDesktopTrigger.click();
                    this.userMenuDesktopLink.focus();
                  }, navigation: readData(this.userNavigation) })),
              h("div", { slot: "trigger", class: "user-menu-trigger", ref: (el) => (this.userMenuDesktopTrigger = el) }))))),
        readData(this.userNavigation).length > 0 && (h("scale-telekom-nav-item", { class: "user-menu-mobile" },
          h("button", { ref: (el) => {
              this.userMenuMobileTrigger = el;
            } },
            h("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true },
              h("scale-icon-user-file-user", null, " "))),
          h("scale-telekom-nav-flyout", { variant: "mobile" },
            h("scale-telekom-mobile-flyout-canvas", null,
              h("app-navigation-user-menu", { slot: "mobile-main-nav", hide: () => {
                  this.userMenuMobileTrigger.click();
                  this.userMenuMobileTrigger.focus();
                }, navigation: readData(this.userNavigation) }))))),
        (readData(this.iconNavigation) || [])
          .filter(({ id }) => id !== 'menu')
          .map((item) => {
          return (h("scale-telekom-nav-item", null,
            h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
                if (typeof item.onClick === 'function') {
                  item.onClick(event);
                }
              } }, item.badgeLabel ? (h("scale-badge", { count: item.badgeCount, label: item.badgeLabel, "label-visually-hidden": item.labelVisuallyHidden, "aria-label-translation": item.ariaLabelTranslation }, renderIcon({
              tag: `scale-icon-${item.icon}`,
              attributes: {},
            }))) : (renderIcon({
              tag: `scale-icon-${item.icon}`,
              attributes: {},
            })))));
        }),
        !readData(this.mainNavigation) &&
          !readData(this.sectorNavigation) &&
          !readData(this.addonNavigation) ? null : (h("scale-telekom-nav-item", { "hide-on-desktop": true },
          h("button", null,
            h("scale-badge", null,
              h("scale-icon-action-menu", null))),
          h("scale-telekom-nav-flyout", { variant: "mobile" },
            h("scale-telekom-mobile-flyout-canvas", { "app-name": this.appName, "app-name-link": this.appNameLink || 'javascript:void(0);', "app-name-click": (event) => {
                if (typeof this.appNameClick === 'function') {
                  this.appNameClick(event);
                }
              } },
              !readData(this.mainNavigation) ? null : (h("scale-telekom-mobile-menu", { slot: "mobile-main-nav" }, readData(this.mainNavigation).map((item) => {
                const { selected, parent } = findSelected(readData(this.mainNavigation), this.activeRouteId);
                const rootNode = selected &&
                  findRootNode(readData(this.mainNavigation), selected.id);
                const isRootOpen = (itemId) => rootNode &&
                  rootNode.id === itemId &&
                  itemId !== this.activeRouteId;
                const isActive = (itemId) => itemId === this.activeRouteId;
                return (h("scale-telekom-mobile-menu-item", { open: isRootOpen(item.id), active: isActive(item.id) },
                  h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
                      if (typeof item.onClick === 'function') {
                        item.onClick(event);
                      }
                    } }, item.name),
                  !item.children
                    ? null
                    : item.children.map((child) => {
                      return (h("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(child.id), open: parent && parent.id === child.id },
                        h("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
                            if (typeof child.onClick ===
                              'function') {
                              child.onClick(event);
                            }
                          } }, child.name),
                        !child.children
                          ? null
                          : child.children.map((grandChild) => (h("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(grandChild.id) },
                            h("a", { href: grandChild.href ||
                                'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
                                if (typeof grandChild.onClick ===
                                  'function') {
                                  grandChild.onClick(event);
                                }
                              } }, grandChild.name))))));
                    })));
              }))),
              !readData(this.sectorNavigation) ? null : (h("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
                return (h("scale-telekom-nav-item", null,
                  h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
                      if (typeof item.onClick === 'function') {
                        item.onClick(event);
                      }
                    } }, item.name)));
              }))),
              !readData(this.addonNavigation) ? null : (h("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav", alignment: "left" }, readData(this.addonNavigation).map((item) => {
                return (h("scale-telekom-nav-item", null,
                  h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
                      if (typeof item.onClick === 'function') {
                        item.onClick(event);
                      }
                    } }, item.name)));
              })))))))))));
  }
  static get is() { return "scale-telekom-header-data-back-compat"; }
  static get originalStyleUrls() { return {
    "$": ["./telekom-header-data-back-compat.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-header-data-back-compat.css"]
  }; }
  static get properties() { return {
    "appName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "app-name",
      "reflect": true
    },
    "appNameLink": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "app-name-link",
      "reflect": false
    },
    "appNameClick": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "app-name-click",
      "reflect": false
    },
    "logoHref": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-href",
      "reflect": false
    },
    "logoTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-title",
      "reflect": false
    },
    "logoHideTitle": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-hide-title",
      "reflect": false
    },
    "mainNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "main-navigation",
      "reflect": false
    },
    "iconNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-navigation",
      "reflect": false
    },
    "addonNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "addon-navigation",
      "reflect": false
    },
    "sectorNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sector-navigation",
      "reflect": false
    },
    "userNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "user-navigation",
      "reflect": false
    },
    "activeRouteId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-route-id",
      "reflect": false
    }
  }; }
}
