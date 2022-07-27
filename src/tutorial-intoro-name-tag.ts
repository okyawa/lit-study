import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
class NameTag extends LitElement {
  @property()
  name: string = '';

  @property()
  checked: boolean = false;

  override render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name" ?disabled=${!this.checked}>
      <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'name-tag': NameTag;
  }
}
