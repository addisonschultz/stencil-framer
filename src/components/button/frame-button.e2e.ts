import { newE2EPage } from '@stencil/core/testing';

describe('frame-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frame-button></frame-button>');

    const element = await page.find('frame-button');
    expect(element).toHaveClass('hydrated');
  });
});
