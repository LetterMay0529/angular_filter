import { MidProjectPage } from './app.po';

describe('mid-project App', function() {
  let page: MidProjectPage;

  beforeEach(() => {
    page = new MidProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
