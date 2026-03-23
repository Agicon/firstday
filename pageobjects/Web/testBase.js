/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class testBase {
  getCurrentDate() {
    const d = new Date();
    const currentDate = d.getDate();
    return currentDate;
  }
};
