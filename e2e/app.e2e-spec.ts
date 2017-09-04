import { DogQuizAppPage } from './app.po';

describe('dog-quiz-app App', () => {
  let page: DogQuizAppPage;

  beforeEach(() => {
    page = new DogQuizAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
