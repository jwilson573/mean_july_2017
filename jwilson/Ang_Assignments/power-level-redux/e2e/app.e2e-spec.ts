import { PowerLevelReduxPage } from './app.po';

describe('power-level-redux App', () => {
  let page: PowerLevelReduxPage;

  beforeEach(() => {
    page = new PowerLevelReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
