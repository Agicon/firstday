import { Given } from "@cucumber/cucumber";
const { expect, $, browser } = require('@wdio/globals')

import androidPage from "../pageobjects/Android/androidPage";
import iosLoginPage from "../pageobjects/iOS/loginPage";
const pages = {
  login: androidPage,
};

Given(/^User install the latest build for (.*) app$/, async (app) => {
  await androidPage.installBuild(app);
});
