document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "" || pass == "") {
        document.getElementById("msg").innerHTML = "Fill all fields";
    } else {
        document.getElementById("msg").innerHTML = "Login Successful";
    }
};