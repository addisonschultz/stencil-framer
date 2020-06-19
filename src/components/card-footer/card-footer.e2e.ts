import { newE2EPage } from '@stencil/core/testing';

describe('card-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-footer></card-footer>');

    const element = await page.find('card-footer');
    expect(element).toHaveClass('hydrated');
  });
});
