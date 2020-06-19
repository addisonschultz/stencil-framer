import { newSpecPage } from '@stencil/core/testing';
import { FrameButton } from './frame-button';

describe('frame-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrameButton],
      html: `<frame-button></frame-button>`,
    });
    expect(page.root).toEqualHtml(`
      <frame-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </frame-button>
    `);
  });
});
