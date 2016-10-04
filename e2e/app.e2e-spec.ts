import { AngularRxjs1Page } from './app.po';

describe('angular-rxjs-1 App', function() {
  let page: AngularRxjs1Page;

  beforeEach(() => {
    page = new AngularRxjs1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
