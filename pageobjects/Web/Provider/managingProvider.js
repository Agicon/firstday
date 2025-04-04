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
    return $("input[id='mother_mobile_number']");
}

get websiteField(){
    return $("input[id='website']");
}

get officeNumber(){
    return $("input[id='office_number']");
}

get officeInformation(){
    return $("textarea[id='office_information']");
}

get stateField(){
    return $("input[id='state']");
}

get cityField(){
    return $("input[id='city']");
}

get addressField(){
    return $("textarea[id='address']");
}

get zipCodeField(){
    return $("input[id='zipcode']");
}

get createButton(){
    return $("button[id='createBtn']");
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
    await this.nameField.waitForDisplayed({ reverse: true, timeout: 20000 });
    if (await this.nameField.isDisplayed() === false) {
        console.log("New Managing Provider form has successfully closed")
    } else {
        throw new Error("Managing provider form is still displayed after clicked on the close button");

    }
}



}
module.exports = new MangingProvider();