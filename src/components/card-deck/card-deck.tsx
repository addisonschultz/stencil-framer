import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'card-deck',
  styleUrl: 'card-deck.css',
  shadow: true,
})
export class CardDeck implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card-deck">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
