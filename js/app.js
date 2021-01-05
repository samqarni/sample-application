
//Enabel or Disabled button - Start
let username = document.getElementById("Username");
let button = document.getElementById("search");
let app  = document.getElementById("ApplictionName");
button.disabled = true;

if(username.value === "")  username.addEventListener('input', disabledButton);
if(app.value === "")  app.addEventListener('input', disabledButton);

function disabledButton() {
    if (username.value.length === "" || app.value.length === ""){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}
//Enabel or Disabled button - End
