const { $, browser } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get emailField () {
        return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]');
    }
    get paswordField () {
        return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]');
    }


    get search () {
        return $('//input[@id="search"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        await browser.pause(10000);
        await this.search.click();
        // await browser.pause(10000);
        // await this.btnSubmit1.click();
    }

    async loginn () {
        await this.emailField.waitForDisplayed({timeout:10000});
        await this.emailField.click();
        await this.emailField.setValue("testmycaregiver2jan4@yopmail.com");
        await this.paswordField.click();
        await this.paswordField.setValue("Qwerty@123");
       
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        // return super.open('login');
        await browser.url("https://webdriver.io/");
    }

    async returnText() {
        var actAtt = await this.search.getAttribute("label");
        return actAtt;
      }
    
    
}

module.exports = new LoginPage();
