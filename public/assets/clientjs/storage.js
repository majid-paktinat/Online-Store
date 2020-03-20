// bootcamp

function loginRequired(input=true) {
// sessionStorage.getItem("online-userId");
// localStorage.getItem("online-userId"); // ---- (IF 'Remember Me' CHECKED)
// let userId = (sessionStorage.getItem("online-userId")) ? sessionStorage.getItem("online-userId") : localStorage.getItem("online-userId");

// if (input) {
    // document.getElementById("online-signin").style.display='block';
    // document.getElementById("online-signout").style.display='none';
// }

if ((sessionStorage.getItem("online-userId") || localStorage.getItem("online-userId"))) 
        { document.getElementById("online-signin").style.display='none'; } 
    else { 
        if (input) { location.href="/login.html" } // like "Receipt.htmml"
        else {  document.getElementById("online-signin").style.display='block';
                document.getElementById("online-signout").style.display='none'; } // like "ContactUs.html"
    }
};

function doLogout(loginRequiredInput=true) {
    sessionStorage.removeItem("online-userId");
    localStorage.removeItem("online-userId");
    loginRequired(loginRequiredInput);
}