import { newSpecPage } from '@stencil/core/testing';
import { CardImage } from './card-image';

describe('card-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardImage],
      html: `<card-image></card-image>`,
    });
    expect(page.root).toEqualHtml(`
      <card-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-image>
    `);
  });
});
