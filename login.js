// Get Email & Password
function getEmil() {
    return document.getElementById("getEmail").value;
}
function getPsd() {
    return document.getElementById("getPsd").value;
}
function getName() {
    return document.getElementById("getName").value;
}

//  Tostify Error Color

let sucessColr = "linear-gradient(to right, #00b09b, #96c93d)"
let errorColr = "linear-gradient(to right, #e52d27, #b31217)"


// Tostify
function toastifyInfo(msg, clr = sucessColr) {
    Toastify({
        text: msg,
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: clr,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Check Email

function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex))
        return true;
    else
        return false;
}

//  Check Form Vaildation 
function formVaildation() {

    let psd = getPsd();
    let email = getEmil();
    let checkMail = isEmail(email);
    if (email == "" || psd == "") {
        toastifyInfo("Please Fill Email and Password Field", errorColr)
        return;
    }
    if (checkMail) {
        if (psd.length >= 6)
            return true;
        else
            toastifyInfo("Password Must be 6 Character", errorColr)
        return;

    }
    else
        toastifyInfo("Wrong e-mail Format", errorColr)
}

function userLogin() {
    let usermail = "admin@user.com"
    let userpass = "123456"
    let psd = getPsd();
    let email = getEmil();
    let vaildationFlag = formVaildation();
    if (vaildationFlag) {
        if (email == usermail && psd == userpass) {
            location.href="home.html"
        }
        else {
            toastifyInfo("Wrong Password & Email 🔐", errorColr)
        }
    }

}






