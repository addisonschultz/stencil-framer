import { newE2EPage } from '@stencil/core/testing';

describe('card-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-container></card-container>');

    const element = await page.find('card-container');
    expect(element).toHaveClass('hydrated');
  });
});
