import { LoginRegPage } from './app.po';

describe('login-reg App', () => {
  let page: LoginRegPage;

  beforeEach(() => {
    page = new LoginRegPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
