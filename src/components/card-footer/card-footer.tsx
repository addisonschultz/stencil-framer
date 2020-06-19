import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'frame-card-footer',
  styleUrl: 'card-footer.css',
  shadow: true,
})
export class CardFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card-footer text-muted">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
