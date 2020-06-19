import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'frame-card',
  styleUrl: 'card-container.css',
  shadow: true,
})
export class CardContainer implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
