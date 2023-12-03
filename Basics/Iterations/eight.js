// reduce method

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let initialValue = 0;

const totalPrice = shoppingCart.reduce((acc , item) => acc + item.price , initialValue)

// console.log(totalPrice);

let myNums = [2,3,4,5,6,7];

console.log(myNums.reduce((acc , CurrValue) => acc + CurrValue, 0)); // 0 + 2 = 2 + 3 = 5 + 4 = 9 + 5 = 14 + 6 = 20 + 7 = 27 

