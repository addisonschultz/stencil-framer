import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'frame-card-body',
  styleUrl: 'card-body.css',
  shadow: true,
})
export class CardBody implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card-body">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
