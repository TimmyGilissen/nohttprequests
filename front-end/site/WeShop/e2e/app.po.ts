export class ShoppingListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('shopping-list-app h1')).getText();
  }
}
