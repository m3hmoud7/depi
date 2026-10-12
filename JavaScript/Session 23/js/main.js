let form = document.getElementById("myForm");

form.onsubmit = function () {
  let dollar = document.getElementById("dollar").value;
  let result = document.getElementById("result");

  if (dollar == "") {
    result.innerHTML = "Enter Value";
    return false;
  } else if (isNaN(dollar)) {
    result.innerHTML = "Enter Number Not Text";
    return false;
  } else if (dollar < 0) {
    result.innerHTML = "Enter Positive Number";
    return false;
  } else if (dollar == 0) {
    result.innerHTML = "Enter Number Rather than Zero";
    return false;
  } else {
    result.innerHTML = dollar * 50 + " Egyptian Pound";
    return false;
  }
};
