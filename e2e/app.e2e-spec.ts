import { GtFormsPage } from './app.po';

describe('gt-forms App', function() {
  let page: GtFormsPage;

  beforeEach(() => {
    page = new GtFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
