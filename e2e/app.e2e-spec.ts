import { UrTrackerPage } from './app.po';

describe('ur-tracker App', () => {
  let page: UrTrackerPage;

  beforeEach(() => {
    page = new UrTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
