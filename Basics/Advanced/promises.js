const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promised consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
  }, 1000);
  resolve();
}).then(() => {
  console.log("Promised 2 consumed");
});

const promisedThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "sameer sattar",
      email: "sameersattar@gmail.com",
    });
  }, 1000);
});

promisedThree.then((user) => {
  console.log(user);
});

const promisedFour = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    if (!error) {
      resolve({
        name: "kashif ahmed",
        email: "kashif ahmed@gmail.com",
      });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promisedFour
  .then((user) => {
    console.log(user);
    return user.email;
  })
  .then((userEmail) => {
    console.log(userEmail);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promisedFive = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    if (!error) {
      resolve({
        langName: "Javascript",
        framework: "REACT JS ",
      });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumedFive() {
  try {
    const response = await promisedFive;
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

consumedFive();

async function getAllUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

// getAllUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


consumedFive();



