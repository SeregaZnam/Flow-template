// @flow

import { v4 as uuidv4 } from "uuid";

type ElementConfig = {
   selector:string,
   template: string,
   style?: string,
   useShadow?: boolean
}

const Element = (config: ElementConfig) => (cls: any) => {
   if (!config.template) {
      throw new Error('You need to pass a template for the element');
   }

   const template = makeTemplate(config);
   const connectedCallback = cls.prototype.connectedCallback || function () {};

   cls.prototype.connectedCallback = function() {
      const clone = document.importNode(template.content, true);
      if (config.useShadow) {
         this.attachShadow({mode: 'open'}).appendChild(clone);
      } else {
         this.appendChild(clone);
      }
      connectedCallback.call(this);
   };

   window.customElements.define(config.selector, cls);
};

const makeTemplate = (config: ElementConfig): string => {
   const template = document.createElement('template');
   if (config.style) {
      const customAttr = encapsulationAttr();

      config.template = `
         <style>.${customAttr} ${config.style}</style>
         <section class="${customAttr}">${config.template}</section>`;
   }
   template.innerHTML = config.template;
   return template;
};

const encapsulationAttr = (): string => uuidv4().replace(/[0-9]/g, '');

export {
   Element
};
