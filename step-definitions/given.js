import { Given } from "@cucumber/cucumber";
const { expect, $, browser } = require('@wdio/globals')

import LoginPage from "../pageobjects/Android/loginPage";
import iosLoginPage from "../pageobjects/iOS/loginPage";
const pages = {
    login: LoginPage
    
}

Given(/^User install the latest build for (.*) app$/, async (app) => {
    await LoginPage.installBuild(app);
});
