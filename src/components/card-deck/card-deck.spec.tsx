import { newSpecPage } from '@stencil/core/testing';
import { CardDeck } from './card-deck';

describe('card-deck', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardDeck],
      html: `<card-deck></card-deck>`,
    });
    expect(page.root).toEqualHtml(`
      <card-deck>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-deck>
    `);
  });
});
