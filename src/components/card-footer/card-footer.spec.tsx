import { newSpecPage } from '@stencil/core/testing';
import { CardFooter } from './card-footer';

describe('card-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `<card-footer></card-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <card-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-footer>
    `);
  });
});
