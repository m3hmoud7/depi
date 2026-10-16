function handleSubmit() {
  let user = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let confirm = document.getElementById("confirm").value;
  let result = document.getElementById("result");
  if (
    user.length >= 5 &&
    user.length <= 15 &&
    email.indexOf("@", 1) != -1 &&
    email.indexOf(".com", 5) != -1 &&
    pass.length >= 8 &&
    pass == confirm
  ) {
    result.setAttribute("class", "");
  } else {
    result.setAttribute("class", "alert  theme-danger text-center ");
  }
  if (user == "" && email == "" && pass == "" && confirm == "") {
    result.innerHTML = "Enter Date";
    return false;
  } else if (user.length < 5 || user.length > 15) {
    result.innerHTML = "Enter 5-15 Chracters In Name";
    return false;
  } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 5) == -1) {
    result.innerHTML = "Enter Valid Email";
    return false;
  } else if (pass.length < 8) {
    result.innerHTML = "Weak Password";
    return false;
  } else if (pass != confirm) {
    result.innerHTML = "Password Is Not Matched";
    return false;
  }
}
