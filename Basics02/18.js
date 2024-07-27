// optional chaining

const user = {
    name: 'John Doe',
    // address: {
    //     street: '123 Main St',
    //     city: 'New York',
    //     country: 'USA'
    // }
};

console.log(user?.address?.street); // undefined
console.log(user?.name); // john Doe