import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'frame-button',
  styleUrl: 'frame-button.scss',
  shadow: true,
})
export class FrameButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <button class="btn btn-outline-primary" type="submit">Button</button>
      </Host>
    );
  }

}
