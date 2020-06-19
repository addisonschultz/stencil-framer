import { newE2EPage } from '@stencil/core/testing';

describe('card-deck', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-deck></card-deck>');

    const element = await page.find('card-deck');
    expect(element).toHaveClass('hydrated');
  });
});
