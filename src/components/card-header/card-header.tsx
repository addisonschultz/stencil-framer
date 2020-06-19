import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'frame-card-header',
  styleUrl: 'card-header.css',
  shadow: true,
})
export class CardHeader implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card-header">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
