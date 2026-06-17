// document.getElementById("form").onsubmit = function(e) {
//     e.preventDefault();

//     let user = document.getElementById("username").value;
//     let pass = document.getElementById("password").value;

//     if (user == "" || pass == "") {
//         document.getElementById("msg").innerHTML = "Fill all fields";
//     } else {
//         document.getElementById("msg").innerHTML = "Login Successful";
//     }
// };
// const validateform = (event) => {
//     event.preventDefault();
//     let username = event.target.username
//     let password = event.target.password
//     let error = document.getElementById('error')

// //     if(username.value === '' || password.value === '') {
// //         error.innerHTML = 'Fill all fields'
// //     }    else {
// //         error.innerHTML = 'Login Successful'
// //    }
//       if(username.value === "") {
//         error.innerHTML = "please enter username"
//         username.style.bordercolor = "red"
//       }
// }
const validateForm = (event) => {
    event.preventDefault();

    let username = event.target.username;
    let password = event.target.password;
    let error = document.getElementById("error");

    error.innerHTML = "";
    username.style.borderColor = "";
    password.style.borderColor = "";

    if (username.value === "") {
        error.innerHTML = "Please enter username";
        username.style.borderColor = "red";
        return;
    }

    if (password.value === "") {
        error.innerHTML = "Please enter password";
        password.style.borderColor = "red";
        return;
    }

    error.style.color = "green";
    error.innerHTML = "Login Successful";
};