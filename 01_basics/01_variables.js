const accountId = 12
let accountName = "Dhaval"
var accountEmail = "dhaval@gmail.com"
accountCity = "Valsad" /* it will exciute but not proper way */
let accountState;

// accountId = 21 // not allowed
accountName = "Sheth"
accountEmail = "sheth@gmail.com"
accountCity = "Surat"

/* 
In javascript avoid var to use.
Becasue it will create issue in block scope and functional scope.
*/

console.log(accountId);

console.table([accountId, accountName,accountEmail,accountCity,accountState]);
