import { newE2EPage } from '@stencil/core/testing';

describe('card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-header></card-header>');

    const element = await page.find('card-header');
    expect(element).toHaveClass('hydrated');
  });
});
