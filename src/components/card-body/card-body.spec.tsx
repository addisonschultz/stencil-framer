import { newSpecPage } from '@stencil/core/testing';
import { CardBody } from './card-body';

describe('card-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardBody],
      html: `<card-body></card-body>`,
    });
    expect(page.root).toEqualHtml(`
      <card-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-body>
    `);
  });
});
