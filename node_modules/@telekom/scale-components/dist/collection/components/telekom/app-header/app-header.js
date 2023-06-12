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
import { Component, h, Prop, Host, State, Listen, Watch, Element, } from '@stencil/core';
import classNames from 'classnames';
import { findRootNode } from '../../../utils/menu-utils';
import statusNote from '../../../utils/status-note';
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
export class Header {
  constructor() {
    this.portalName = '';
    this.mainNavigation = [];
    this.iconNavigation = [];
    this.userNavigation = [];
    this.sectorNavigation = [];
    this.addonNavigation = [];
    this.sticky = false;
    // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
    this.isMegaMenuVisible = false;
    this.megaMenuVisible = false;
    // DEPRECATED - mobileMenuVisible should replace isMobileMenuVisible
    this.isMobileMenuVisible = false;
    this.mobileMenuVisible = false;
    this.activeSegment = readData(this.sectorNavigation).find(({ id }) => id === this.activeSectorId) || readData(this.sectorNavigation)[0];
    this.mobileMenu = false;
    this.userMenu = false;
    this.userMenuMobile = false;
    this.visibleMegaMenu = '';
    this.scrolled = false;
  }
  megaMenuVisibleChange(isVisible) {
    this.visibleMegaMenu = isVisible;
  }
  // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
  isMegaMenuVisibleChange(isVisible) {
    this.visibleMegaMenu = isVisible;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }
  handleCloseMenu() {
    if (this.mobileMenu) {
      this.mobileMenuToggle.focus();
    }
    this.mobileMenu = false;
  }
  handleCloseUserMenu() {
    if (this.userMenuToggle) {
      this.userMenuToggle.focus();
    }
    this.userMenu = false;
  }
  handleOpenUserMenu() {
    this.userMenu = true;
  }
  handleActiveSegment(newValue) {
    this.activeSegment =
      readData(this.sectorNavigation).find(({ id }) => id === newValue) || {};
  }
  componentWillLoad() {
    this.hasSlotMenuMain =
      !!this.hostElement.querySelector('[slot="menu-main"]');
    this.hasSlotMenuIcon =
      !!this.hostElement.querySelector('[slot="menu-icon"]');
    this.hasSlotMenuSector = !!this.hostElement.querySelector('[slot="menu-sector"]');
    this.hasSlotMenuAddon = !!this.hostElement.querySelector('[slot="menu-addon"]');
    this.hasSlotMenuMobile = !!this.hostElement.querySelector('[slot="menu-mobile"]');
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotLogoInverse = !!this.hostElement.querySelector('[slot="logo-inverse"]');
  }
  componentDidUpdate() {
    this.hasSlotMenuMain =
      !!this.hostElement.querySelector('[slot="menu-main"]');
    this.hasSlotMenuIcon =
      !!this.hostElement.querySelector('[slot="menu-icon"]');
    this.hasSlotMenuSector = !!this.hostElement.querySelector('[slot="menu-sector"]');
    this.hasSlotMenuAddon = !!this.hostElement.querySelector('[slot="menu-addon"]');
    this.hasSlotMenuMobile = !!this.hostElement.querySelector('[slot="menu-mobile"]');
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotLogoInverse = !!this.hostElement.querySelector('[slot="logo-inverse"]');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isMegaMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.isMobileMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMobileMenuVisible" is deprecated. Please use the "mobileMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  handleMobileMenu(event) {
    if (event) {
      event.preventDefault();
    }
    if (event && 'key' in event) {
      if (!['Escape', 'Enter'].includes(event.key)) {
        return;
      }
      if (event.key === 'Escape' && !this.mobileMenu) {
        return;
      }
      if (event.key === 'Enter' && this.mobileMenu) {
        return;
      }
    }
    this.userMenuMobile = false;
    this.mobileMenu = !this.mobileMenu;
  }
  handleSelectedSegment(event, item) {
    this.activeSegment = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }
  menuMain() {
    const rootNode = findRootNode(readData(this.mainNavigation), this.activeRouteId);
    const isActive = (item) => rootNode && rootNode.id === item.id;
    return (h("ul", { class: "main-navigation", onKeyDown: (e) => {
        if (e.key === 'Escape') {
          this.visibleMegaMenu = '';
        }
      } }, this.hasSlotMenuMain ? (h("slot", { name: "menu-main" })) : (readData(this.mainNavigation).map((item) => (h("scale-nav-main", { href: item.href, active: isActive(item), megaMenuVisible: this.visibleMegaMenu === item.id, innerId: item.id, onMouseEnter: () => {
        this.visibleMegaMenu = item.children ? item.id : null;
      }, onMouseLeave: () => {
        this.visibleMegaMenu = '';
      }, clickLink: (event) => {
        if (item.href) {
          this.visibleMegaMenu = '';
        }
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
        this.visibleMegaMenu = item.children ? item.id : null;
      }, name: item.name }, item.children && item.children.length > 0 && (h("app-mega-menu", { navigation: item.children, hide: () => {
        this.visibleMegaMenu = '';
      }, activeRouteId: this.activeRouteId, active: this.visibleMegaMenu === item.id }))))))));
  }
  menuIcon() {
    const { defaultName, openedName } = readData(this.iconNavigation).find(({ id }) => id === 'menu') || { defaultName: 'Menu', openedName: 'Close' };
    const { shortName = 'Login', badge, badgeLabel, } = readData(this.userNavigation).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return (h("ul", { class: "meta-navigation" },
      this.hasSlotMenuIcon ? (h("slot", { name: "menu-icon" })) : (readData(this.iconNavigation)
        .filter(({ id }) => id !== 'menu')
        .map((item) => (h("scale-nav-icon", { icon: item.icon, href: item.href, badge: item.badge, badgeLabel: item.badgeLabel, clickLink: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)))),
      readData(this.userNavigation).length > 0 && (h("span", null,
        h("span", { class: "header__user-menu--desktop", "aria-label": this.userMenuAriaLabel },
          h("scale-menu-flyout", null,
            h("scale-nav-icon", { slot: "trigger", active: this.userMenu, icon: 'user-file-user', refUserMenuToggle: (el) => (this.userMenuToggle = el), badge: badge, badgeLabel: badgeLabel, onKeyDown: (event) => {
                // Handle Spacebar separately because actual trigger is an <a>
                if (event.key === ' ') {
                  event.target.click();
                  event.preventDefault();
                }
              } }, shortName),
            h("scale-menu-flyout-list", null,
              h("app-navigation-user-menu", { hide: () => {
                  if (!this.userMenu) {
                    return;
                  }
                  this.userMenu = false;
                  this.userMenuToggle.focus();
                  window.document.dispatchEvent(new Event('click'));
                }, navigation: readData(this.userNavigation) })))),
        h("span", { class: "header__user-menu--mobile", "aria-label": this.userMenuAriaLabel },
          h("scale-nav-icon", { slot: "trigger", active: this.userMenuMobile, icon: 'user-file-user', refMobileUserMenuToggle: (el) => (this.userMenuMobileToggle = el), clickLink: () => {
              this.mobileMenu = false;
              this.userMenuMobile = !this.userMenuMobile;
            }, badge: badge, badgeLabel: badgeLabel, onKeyDown: (event) => {
              // Handle Spacebar separately because actual trigger is an <a>
              if (event.key === ' ') {
                event.target.click();
                event.preventDefault();
              }
            } }, shortName)))),
      (readData(this.mainNavigation).length > 0 ||
        this.hasSlotMenuMobile) && (h("scale-nav-icon", { mobileMenuOpen: this.mobileMenu, icon: this.mobileMenu ? 'action-circle-close' : 'action-menu', clickLink: (event) => this.handleMobileMenu(event), refMobileMenuToggle: (el) => (this.mobileMenuToggle = el), active: this.mobileMenu }, this.mobileMenu ? openedName : defaultName))));
  }
  menuSector() {
    return (h("ul", { class: "sector-navigation" }, this.hasSlotMenuSector ? (h("slot", { name: "menu-sector" })) : this.portalName ? (h("li", { class: "sector-navigation__portal-name" }, this.portalName)) : (readData(this.sectorNavigation).map((item) => (h("scale-nav-segment", { active: this.activeSegment.id === item.id, href: item.href, onClick: (event) => this.handleSelectedSegment(event, item), onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  menuAddon() {
    return (h("ul", { class: "addon-navigation" }, this.hasSlotMenuAddon ? (h("slot", { name: "menu-addon" })) : (readData(this.addonNavigation).map((item) => (h("scale-nav-segment", { href: item.href, onClick: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      }, onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  render() {
    return (h(Host, null,
      h("header", { class: "header__container" },
        h("div", { class: this.getCssClassMap() },
          h("div", { class: "header__brand" },
            h("span", { class: "header__brand-before" }),
            h("span", { class: "header__brand-after" }),
            h("div", { class: "header__brand-content" },
              h("div", { class: "header__brand-branding" }, this.hasSlotLogo ? (h("slot", { name: "logo" })) : (h("scale-logo", { transparent: true, language: this.claimLang, href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, variant: "white", scrollIntoViewOnFocus: true, focusable: true, styles: ":host { --logo-size: 36px;} @media (max-width: 1039px) { :host {--logo-size: 26px;} }", logoAriaDescribedBy: this.logoAriaDescribedBy, logoAriaHidden: this.scrolled }))),
              h("div", { class: "header__brand-sector" }, this.menuSector()),
              h("div", { class: "header__brand-meta" }, this.menuAddon()))),
          h("nav", { class: "header__nav", "aria-label": "top" },
            h("span", { class: "header__nav-before" }),
            h("span", { class: "header__nav-after" }),
            h("div", { class: "header__nav-content" },
              h("div", { class: "header__nav-logo" }, this.hasSlotLogoInverse ? (h("slot", { name: "logo-inverse" })) : (h("scale-logo", { transparent: true, language: "", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, focusable: this.scrolled || this.sticky, size: 24, logoAriaDescribedBy: this.logoAriaDescribedBy, logoAriaHidden: !this.scrolled }))),
              h("div", { class: "header__nav-menu-wrapper" },
                h("div", { class: "header__nav-menu-main" }, this.menuMain()),
                h("div", { class: "header__nav-menu-icon" }, this.menuIcon())))),
          h("nav", { class: `header__nav__mobile-menu${this.mobileMenu ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" }, this.hasSlotMenuMobile ? (h("slot", { name: "menu-mobile" })) : (h("div", null,
            h("app-navigation-sector-mobile", { navigation: readData(this.sectorNavigation), activeSectorId: this.activeSectorId, hide: () => {
                this.handleMobileMenu();
                this.mobileMenuToggle.focus();
              } }),
            h("app-navigation-main-mobile", { navigation: readData(this.mainNavigation), activeRouteId: this.activeRouteId, hide: () => {
                this.handleMobileMenu();
                this.mobileMenuToggle.focus();
              } })))),
          h("nav", { class: `header__nav__mobile-menu${this.userMenuMobile ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" },
            h("div", null, this.userMenuMobile && (h("app-navigation-user-menu", { hide: () => {
                if (!this.userMenuMobile) {
                  return;
                }
                this.userMenuMobile = false;
                this.userMenuMobileToggle.focus();
              }, navigation: readData(this.userNavigation) }))))))));
  }
  getCssClassMap() {
    return classNames('header', (this.scrolled || this.sticky) && 'header--sticky', (this.visibleMegaMenu || this.mobileMenu || this.userMenuMobile) &&
      'menu--open');
  }
  static get is() { return "scale-app-header"; }
  static get originalStyleUrls() { return {
    "$": ["app-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-header.css"]
  }; }
  static get properties() { return {
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
    "logoClick": {
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
      "attribute": "logo-click",
      "reflect": false
    },
    "logoAriaDescribedBy": {
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
      "attribute": "logo-aria-described-by",
      "reflect": false
    },
    "claimLang": {
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
      "attribute": "claim-lang",
      "reflect": false
    },
    "portalName": {
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
      "attribute": "portal-name",
      "reflect": false,
      "defaultValue": "''"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "main-navigation",
      "reflect": false,
      "defaultValue": "[]"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-navigation",
      "reflect": false,
      "defaultValue": "[]"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "user-navigation",
      "reflect": false,
      "defaultValue": "[]"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sector-navigation",
      "reflect": false,
      "defaultValue": "[]"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "addon-navigation",
      "reflect": false,
      "defaultValue": "[]"
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
    },
    "activeSectorId": {
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
      "attribute": "active-sector-id",
      "reflect": false
    },
    "sticky": {
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
      "attribute": "sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "userMenuAriaLabel": {
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
      "attribute": "user-menu-aria-label",
      "reflect": false
    },
    "isMegaMenuVisible": {
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
      "attribute": "is-mega-menu-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "megaMenuVisible": {
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
      "attribute": "mega-menu-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "isMobileMenuVisible": {
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
      "attribute": "is-mobile-menu-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "mobileMenuVisible": {
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
      "attribute": "mobile-menu-visible",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "activeSegment": {},
    "mobileMenu": {},
    "userMenu": {},
    "userMenuMobile": {},
    "visibleMegaMenu": {},
    "scrolled": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "megaMenuVisible",
      "methodName": "megaMenuVisibleChange"
    }, {
      "propName": "isMegaMenuVisible",
      "methodName": "isMegaMenuVisibleChange"
    }, {
      "propName": "activeSectorId",
      "methodName": "handleActiveSegment"
    }]; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "onScroll",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "closeMenu",
      "method": "handleCloseMenu",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scale-close",
      "method": "handleCloseUserMenu",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scale-open",
      "method": "handleOpenUserMenu",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
