const { $, browser } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get emailField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]');
  }
  get paswordField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]');
  }

  get search() {
    return $('//input[@id="search"]');
  }

  async login(username, password) {
    await browser.pause(10000);
    await this.search.click();
  }

  async loginn() {
    await this.emailField.waitForDisplayed({ timeout: 10000 });
    await this.emailField.click();
    await this.emailField.setValue("testmycaregiver2jan4@yopmail.com");
    await this.paswordField.click();
    await this.paswordField.setValue("Qwerty@123");
  }

  async open() {
    await browser.url("https://webdriver.io/");
  }

  async returnText() {
    var actAtt = await this.search.getAttribute("label");
    return actAtt;
  }
}

module.exports = new LoginPage();
