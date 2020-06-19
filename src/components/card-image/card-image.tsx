import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'frame-card-image',
  styleUrl: 'card-image.css',
  shadow: true,
})
export class CardImage implements ComponentInterface {

  @Prop() image: string;
  @Prop() alt: string;

  render() {
    return (
      <Host>
        <img class="card-img-top" src={this.image} alt={this.alt} />
      </Host>
    );
  }

}
