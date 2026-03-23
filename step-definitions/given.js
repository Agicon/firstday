import { Given } from "@cucumber/cucumber";

import LoginWebPage from "../pageobjects/Web/loginPage";
const pages = {};
//---------------Web-Steps----------------------//

Given(/^Open web url (.*)$/, async (url) => {
  await browser.setWindowSize(1920, 1080);
  await LoginWebPage.open(url);
});




//---------------Android-steps-----------------//
Given(/^Open web link (.*) to download app$/, async (url) => {
  await browser.setWindowSize(1920, 1080);
  await LoginWebPage.downloadApp(url);
});
