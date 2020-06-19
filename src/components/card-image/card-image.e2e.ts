import { newE2EPage } from '@stencil/core/testing';

describe('card-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-image></card-image>');

    const element = await page.find('card-image');
    expect(element).toHaveClass('hydrated');
  });
});
