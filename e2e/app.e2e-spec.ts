import { NavbarEgPage } from './app.po';

describe('navbar-eg App', () => {
  let page: NavbarEgPage;

  beforeEach(() => {
    page = new NavbarEgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
