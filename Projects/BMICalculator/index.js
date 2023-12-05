const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid a numbers ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid a numbers ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      result.innerHTML = `Under Weight ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Normal Weight ${bmi}`;
    } else {
      result.innerHTML = `Over Weight ${bmi}`;
    }
  }
});
