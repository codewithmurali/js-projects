const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameErrMsg = document.getElementById("user__err");
const passwordErrMsg = document.getElementById("pass__err");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  check(e);
});
function check(e) {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  if (usernameValue != "codewithmurali") {
    e.preventDefault();
    usernameErrMsg.style.display = "block";
  }
  if (passwordValue != "1234") {
    e.preventDefault();
    passwordErrMsg.style.display = "block";
  }
  if (usernameValue == "codewithmurali" && passwordValue == "1234") {
    form.action = "./home.html";
    // console.log("success");
  }
}
