let xlsx = require("xlsx");
let Excel = require("exceljs");

class Testutils {
  getUserCredetials(user) {
    let matched = []; // the array to store matched questions..
    let workbook = new Excel.Workbook();
    workbook.xlsx
      .readFile("./pageobjects/testData/files/usersCredentials.xlsx")
      .then(function () {
        let worksheet = workbook.getWorksheet("userCredentials");

        let actualRowCount = worksheet.actualRowCount;
        console.log("TOTAL NO OF ROWS: " + worksheet.rowCount);
        console.log("ROW USED:" + actualRowCount);
        console.log("Column USED: " + worksheet.columnCount);

        console.log("SEACHING YOUR DATA..................................");

        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          let rowValue = row.getCell(1).value;

          let rowOneValue = rowValue.toString().replace(",", "");

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

            let userId = row.getCell(2).value; //retrive userId
            console.log("UserID: " + userId);

            let password = row.getCell(3).value; //retrive passowrd
            console.log(
              "Password: " + password.toString().replace(password, "********")
            );

            let userName = row.getCell(4).value; //retrive UserName
            console.log("UserName: " + userName);
            let userAddress = row.getCell(5).value; //retrive UserName
            console.log("UserAddress: " + userAddress);

            matched.push(userId, password, userName, userAddress);
          }
        });
      });
    return matched;
  }
}

export default new Testutils();
