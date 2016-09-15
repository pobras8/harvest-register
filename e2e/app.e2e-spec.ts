import { HarvestRegisterPage } from './app.po';

describe('harvest-register App', function() {
  let page: HarvestRegisterPage;

  beforeEach(() => {
    page = new HarvestRegisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
