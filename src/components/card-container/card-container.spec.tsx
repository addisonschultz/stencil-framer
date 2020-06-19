import { newSpecPage } from '@stencil/core/testing';
import { CardContainer } from './card-container';

describe('card-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardContainer],
      html: `<card-container></card-container>`,
    });
    expect(page.root).toEqualHtml(`
      <card-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-container>
    `);
  });
});
