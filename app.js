// write code here
let userName = prompt("username");
let passWord = prompt("password");
if (!userName||!passWord) {
    alert("username or password is required")
} else if (userName == "admin" && passWord == "1234" 
    || userName == "john" && passWord == "qwerty") {
        alert(`Hello ${userName}`)
    } else {
        alert("invalid username or password")
    };