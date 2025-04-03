var xlsx = require("xlsx");
var Excel = require("exceljs");

class Testutils {
  getUserCredetials(user) {
    var matched = []; // the array to store matched questions..
    var workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./pageobjects/testData/files/usersCredentials.xlsx")
      .then(function () {
        var worksheet = workbook.getWorksheet("userCredentials");

        var actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);

        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          var rowValue = row.getCell(1).value;

          var rowOneValue = rowValue.toString().replace(",", "");

          if (user.match(rowOneValue)) {
            console.log(" ");
            console.log(
              "________________________________________________________________________"
            );
            console.log(
              "DATA IS MATCHED AT ROW NO. " + rowNumber + " AS: " + rowOneValue
            );
            console.log(
              "________________________________________________________________________"
            );

            var userId = row.getCell(2).value; //retrive userId
            console.log("UserID: " + userId);

            var password = row.getCell(3).value; //retrive passowrd
            console.log(
              "Password: " + password.toString().replace(password, "********")
            );

            var userName = row.getCell(4).value; //retrive UserName
            console.log("UserName: " + userName);
            var userAddress = row.getCell(5).value; //retrive UserName
            console.log("UserAddress: " + userAddress);

            matched.push(userId, password, userName, userAddress);
          }
        });
      });
    return matched;
  }



}

export default new Testutils();
