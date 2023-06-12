import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { s as statusNote } from './status-note.js';

const carouselCss = ".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:flex;padding:0;overflow:hidden;position:relative;box-sizing:border-box;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:flex;outline:none;z-index:99;position:absolute;transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);align-items:center;border-radius:50%;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:inline-flex;padding:0;z-index:2;position:absolute;transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:flex;transform:translateY(-50%);flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}";

const Carousel = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** (optional) carousel display direction */
    this.vertical = false;
    this.slidesArray = [];
    this.value = 0;
    this.handleSlideChange = (direction) => {
      const val = this.value;
      if (direction === 'prev') {
        val === 0
          ? (this.value = -100 * (this.slidesArray.length - 1))
          : (this.value = val + 100);
      }
      if (direction === 'next') {
        val === -100 * (this.slidesArray.length - 1)
          ? (this.value = 0)
          : (this.value = val - 100);
      }
    };
    this.setActiveSlide = (index) => {
      this.value = -100 * index;
    };
    this.setTransformValue = () => {
      if (!!this.vertical) {
        return `translateY(${this.value}%)`;
      }
      return `translateX(${this.value}%)`;
    };
    this.setActiveCssClass = (index) => {
      if (Math.abs(this.value) / 100 === index) {
        return 'carousel__indicator--active';
      }
      return '';
    };
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  componentWillLoad() {
    if (this.slidesArray.length === 0) {
      const children = this.hostElement.children;
      // tslint:disable-next-line: prefer-for-of
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (children[childIndex].slot === '') {
          // tslint:disable-next-line: prefer-for-of
          for (let slideIndex = 0; slideIndex < children[childIndex].children.length; slideIndex++) {
            const element = children[childIndex].children[slideIndex];
            this.slidesArray.push(element);
          }
        }
      }
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("div", { class: "carousel__container" }, h("div", { class: "carousel__arrow carousel__arrow--left", onClick: () => this.handleSlideChange('prev') }, h("slot", { name: "arrow-left" })), this.slidesArray.map((element) => (h("div", { class: "carousel__slide", style: { transform: this.setTransformValue() } }, h("div", { innerHTML: element.outerHTML })))), h("div", { class: "carousel__arrow carousel__arrow--right", onClick: () => this.handleSlideChange('next') }, h("slot", { name: "arrow-right" }))), h("ul", { class: "carousel__indicators" }, Array.from(Array(this.slidesArray.length).keys()).map((index) => (h("li", { key: index, class: `carousel__indicator ${this.setActiveCssClass(index)}`, onClick: () => this.setActiveSlide(index) })))))));
  }
  getCssClassMap() {
    return classnames('carousel', this.vertical && `carousel--vertical`);
  }
  get hostElement() { return this; }
  static get style() { return carouselCss; }
}, [1, "scale-carousel", {
    "vertical": [4],
    "styles": [1],
    "slidesArray": [32],
    "value": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-carousel"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-carousel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Carousel);
      }
      break;
  } });
}

const ScaleCarousel = Carousel;
const defineCustomElement = defineCustomElement$1;

export { ScaleCarousel, defineCustomElement };
