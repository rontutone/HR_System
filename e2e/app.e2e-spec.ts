import { HRSystemPage } from './app.po';

describe('hr-system App', function() {
  let page: HRSystemPage;

  beforeEach(() => {
    page = new HRSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
