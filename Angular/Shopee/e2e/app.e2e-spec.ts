import { ShopeePage } from './app.po';

describe('shopee App', () => {
  let page: ShopeePage;

  beforeEach(() => {
    page = new ShopeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
