const user = {
    userName : "sameer sattar",
    price : 8999,
    UniversityName : function(){
        console.log("UBIT")
        // console.log(this);  // give the Current values
    }
}

// user.UniversityName();
// user.UniversityName = function(){
//     console.log('Iqra')
// }
// user.UniversityName();
// console.log(this) // {} empty in node js , windows in browsers

function chai1(){
    let Username = "chai1";
   console.log(this.Username) // this  is  not  working in functions
   console.log(this) // give object 
}
 
// chai1();

const chai2 = function(){
    const Username = "chai2"
    console.log(this.Username) // this  is  not  working in functions
    console.log(this) // give object 
}

// chai2()


const newChai = () => {
    let name = "sameer sattar";
    console.log(this.name) // // this  is  not  working in functions
    console.log(this)  // {}
}

// newChai();

const ArrowFunction1 = (num1 , num2) => { // 1st Method
    return num1 + num2;
}

// console.log(ArrowFunction1(4,5));

const ArrowFunction2 = (num1 , num2) => (num1 + num2); // 2nd method

// console.log(ArrowFunction2(43,5));

const ArrowFunction3 = (num1 , num2) => ({price : num1 + num2}); // object in one line

// console.log(ArrowFunction3(3,4))

