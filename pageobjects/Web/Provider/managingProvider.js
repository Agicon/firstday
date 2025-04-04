const { $, browser } = require('@wdio/globals')
const BasePage = require('../testBase');
const { remote } = require('webdriverio');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class MangingProvider extends BasePage {


get managingProviderLink(){
    return $("(//a[@title='Managing Providers'])[2]");
}

get newManagingProviderButton(){
    return $("(//div[@class='col-md-3 pr-0'])[2]");
}

get nameField(){
    return $("//input[@id='mother_first_name']");
}

get closeButton(){
    return $(("//button[@class='btn btn-default']"));
}

get mobileNumber(){
    return $("//input[@id='mother_mobile_number']");
}

get website(){
    return $("//input[@id='website']");
}

get officeNumber(){
    return $("//input[@id='office_number']");
}

get officeInformation(){
    return $("//textarea[@id='office_information']");
}

get state(){
    return $("//input[@id='state']");
}

get city(){
    return $("//input[@id='city']");
}

get address(){
    return $("//textarea[@id='address']");
}

get zipCode(){
    return $("//input[@id='zipcode']");
}

get createButton(){
    return $("//button[@id='createBtn']");
}


async managingProviderIsDisplayed(){
   await this.managingProviderLink.waitForDisplayed({timeut:25000})
   return this.managingProviderLink.isDisplayed();
}

 async clickOnManagingProviderTab(){
    if(await this.managingProviderIsDisplayed() === true){
        await this.managingProviderLink.click();
    }else{
        throw new Error("Managing provider is not displayed on homepage");
    }
 }

 async newManagingProviderButtonIsDisplayed(){
    await this.newManagingProviderButton.waitForDisplayed({timeout:25000});
    return this.newManagingProviderButton.isDisplayed();
 }

async clickOnNewManagingProviderButton(){
    if(await this.newManagingProviderButtonIsDisplayed() === true){
        await this.newManagingProviderButton.click();
    }else{
        throw new Error("New Managing Provider Button is not displayed");
    }
}

async nameFieldIsDisplayed(){
    await this.nameField.waitForDisplayed({timeout:25000});
    return await this.nameField.isDisplayed();
}

async clickOnNameField(){
    if(await this.nameFieldIsDisplayed() === true){
     await this.nameField.click();
    }else{
        throw new Error("Name field is not displayed on managing provider form");
    }
}

async closeButtonIsDisplayed(){
    await this.closeButton.waitForDisplayed({timeout:25000});
    return await this.closeButton.isDisplayed();
}

async clickOnCloseButton(){
    if(await this.closeButtonIsDisplayed() === true){
        await this.closeButton.click();
    }else{
        throw new Error("Close button is not displayed on managing provider form");
    }
}

async verifyClosedForm(){
   await browser.pause(5000);
   if (await this.nameField.isDisplayed() === true){
    console.log("Managing provider form is still displayed after clicked on the close button");
   }else{
    console.log("New Managing Provider form has successfully closed");
   }
}

async fillInvalidMangingProviderForm(){
    await this.nameField.waitForDisplayed({timeout:25000});
    await this.nameField.click();
    await this.nameField.setValue("Test Provider");
    await this.mobileNumber.waitForDisplayed({timeout:25000});
    await this.mobileNumber.click();
    await this.mobileNumber.setValue("1234567890");
    await this.website.waitForDisplayed({timeout:25000});
    await this.website.click();
    await this.website.setValue("https://portal.test.firstdayhc.com/login");
    await this.officeNumber.waitForDisplayed({timeout:25000});
    await this.officeNumber.click();
    await this.officeNumber.setValue("1111122222");
    await this.officeInformation.waitForDisplayed({timeout:25000});
    await this.officeInformation.click();
    await this.officeInformation.setValue("IT office");
    await this.state.waitForDisplayed({timeout:25000});
    await this.state.click();
    await this.state.setValue("Punjab");
    await this.city.waitForDisplayed({timeout:25000});
    await this.city.click();
    await this.city.setValue("Mohali");
    await this.address.waitForDisplayed({timeout:25000});
    await this.address.click();
    await this.address.setValue("ABC 124585");
    await this.zipCode.waitForDisplayed({timeout:25000});
    await this.zipCode.click();
    await this.zipCode.setValue("548521");
    await this.createButton.waitForDisplayed({timeout:25000});
    await this.createButton.click();
}


async verifyAlertFieldMessage(){
  var errorMsg =  await $("//span[@id='mother_email-error']");
  await errorMsg.waitForDisplayed({timeout:25000});
  var ActualError = await errorMsg.getText();
  var ExpectedError ="Please enter email address";
  if(ExpectedError.includes(ActualError)){
    console.log("Error message is displayed below mandatory field");
  }else{
    console.log("Error message is not displayed below mandatory field");
  }
}





}
module.exports = new MangingProvider();