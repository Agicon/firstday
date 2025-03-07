const { $, browser } = require('@wdio/globals')
const BasePage = require('./testBase');
const { remote } = require('webdriverio');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */

    get emailField () {
        return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_email"]');
    }
    get paswordField () {
        return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_password"]');
    }

    get signInWithGoogleButton () {
        return $('//android.widget.Button[@content-desc="Sign in with Google"]');
    }

    get loggedinGoogleAccount () {
        return $('(//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"])[1]');
    }

    get signInButton () {
        return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/text"]|//android.widget.TextView[@resource-id="com.firsthc.alert.staging:id/text"]');
    }

    get noThanksButton(){
        return $("//*[@resource-id='android:id/autofill_dialog_no']");
    }

    get firstChild(){
        return $('(//android.widget.RadioButton)[1]');
    }

    get savePasswordOption(){
        return $("//android.widget.Button[@resource-id='android:id/autofill_save_no']");
    }

    get videoAndPicPermissionPopup(){
        return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']");
    }

    get recordAudioPopup(){
        return $("(//android.widget.Button)[3]");
    }

    get deviceLocationPopup(){
        return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']");
    }

    get notificationAlertPermission(){
        return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']");
    }

    get okButton(){
        return $("//android.widget.Button");
    }

    get clickonbackbutton(){
        return $("android.widget.ImageButton");
    }

    get dashboard(){
        return $("(//android.widget.TextView)[1]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async login (username, password) {
        await this.emailField.waitForDisplayed({timeout:20000});
        await this.emailField.click();
        await this.verifyNoThanksPopup();
        await this.emailField.setValue(username);
        await this.paswordField.click();
        await this.paswordField.setValue(password);
        // await browser.pause(5000);
        await this.signInButton.click();
        await browser.pause(8000);
    }

    async installBuild (app) {
        await this.signInWithGoogleButton.waitForDisplayed({timeout:20000});
        await this.signInWithGoogleButton.click();
        await this.loggedinGoogleAccount.waitForDisplayed({timeout:20000});
        await this.loggedinGoogleAccount.click();
        
        await $("//android.widget.TextView[@text='"+app+"']").waitForDisplayed({timeout:40000});
        await $("//android.widget.TextView[@text='"+app+"']").click();
        await browser.pause(5);
        try {
            await $("android.widget.CheckBox").click();
            await $("android.widget.Button").waitForDisplayed({timeout:5000});
            await $("android.widget.Button").click();
            await browser.pause(10);
            // await $("//android.widget.TextView[@resource-id='dev.firebase.appdistribution:id/download_label']").waitForDisplayed({timeout:50000});
            await $("//android.widget.TextView[@resource-id='dev.firebase.appdistribution:id/download_label']").click();
            await $("//android.widget.Button[@resource-id='android:id/button1']").waitForDisplayed({timeout:90000});
            await $("//android.widget.Button[@resource-id='android:id/button1']").click();
            
        } catch (error) {
            
        }
        await $("//android.widget.Button[@resource-id='dev.firebase.appdistribution:id/open_button']").waitForDisplayed({timeout:90000});
        await $("//android.widget.Button[@resource-id='dev.firebase.appdistribution:id/open_button']").click();
        await browser.pause(5);


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
    
      async verifyFirstChild(){
        await this.firstChild.waitForDisplayed({timeout:25000});
        return this.firstChild.isDisplayed();
    }
    
    async clickOnFirstChild(){
        if(await this.verifyFirstChild() === true){
           await this.firstChild.click();
        }else{
            throw new Error("First child option is not displayed");
        }
    }

    async denySavePasswordPopup(){ 
        try{
          await this.savePasswordOption.waitForDisplayed({timeout:5000});
          await this.savePasswordOption.click();
        }catch(error){
  
        }
      }

      async clickOnRecordAudioPopup(){
        await this.recordAudioPopup.waitForDisplayed({timeout:20000});
        await this.recordAudioPopup.click();
    }

    async clickOnOkButton(){
        await this.okButton.waitForDisplayed({timeout:20000});
        await this.okButton.click();
    }

    async dashboardIsDisplayed(){
        await this.dashboard.waitForDisplayed({timeout:25000});
        return this.dashboard.isDisplayed();
    }

    async verifyDashboard(){
        if(await this.dashboardIsDisplayed() === true){
            console.log("User successfully redirected to homepage");
        }else{
            throw new Error("Dashboard is not displayed");
        }
    }

    async verifyNoThanksPopup(){
        try{
        await this.noThanksButton.waitForDisplayed({timeout:5000});
        await this.noThanksButton.click();
        }catch(error){

        }
    }

    async patientVitalSigns(){
        const patientVital = await $("(//android.widget.TextView)[2]");
        await patientVital.waitForDisplayed({timeout:25000});
        var actualText = await patientVital.getText();
        var expectedText = "Patient's Vital Signs";
        if(expectedText.includes(actualText)){
            console.log("First module of app is verified");
        }else{
         console.log("First module of app is not verified")
        }
    }
}

module.exports = new LoginPage();
