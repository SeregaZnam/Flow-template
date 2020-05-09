import { Element } from '../core';

@Element({
  selector: 'ce-my-name2',
  template: `<div>My name is Inigo Montoya</div>
               <div>You killed my father</div>
               <div>Prepare to die!</div>`,
  style: `{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;     
      padding: 16px;         
      border-top: 1px solid black;
      font-size: 24px;
    }`,
  useShadow: true
})
export class MyName2 extends HTMLElement {
  // connectedCallback() {
  //   const elm = document.createElement('h3');
  //   elm.textContent = 'Boo!';
  //   this.shadowRoot.appendChild(elm);
  // }
}
