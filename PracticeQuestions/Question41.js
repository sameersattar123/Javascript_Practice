// program to format numbers as currency string

const result = (2500).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(result);


