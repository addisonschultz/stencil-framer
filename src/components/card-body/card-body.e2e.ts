import { newE2EPage } from '@stencil/core/testing';

describe('card-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-body></card-body>');

    const element = await page.find('card-body');
    expect(element).toHaveClass('hydrated');
  });
});
