const accountId = 1234;

let accountName = "Meezan Bank"

var accountPassword = "123456"

accountEmail ="sameersattar@gmail.com"

let accountState; // undefined

// accountId = 34; // not allowed

accountName = "Habib Bank"

accountPassword = "345678"

accountEmail = "RameezAhmed22@gmail.com"

/*
 prefer not to used var
because of issue in block and functional scope 
*/


console.table([accountId , accountName , accountPassword , accountEmail , accountState])