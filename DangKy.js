function checkUs() {
    let x = document.getElementById("checkUser").value;
    let errorUser = "";
    if (x.length >= 8 && x.length < 20) {
        errorUser = "";
        document.getElementById("checkUser").classList.remove("ppr");
        document.getElementById("checkUser").classList.remove("ppg");
    } else {
        errorUser = "Vui lòng nhập từ 8 kí tự trở lên";
        document.getElementById("checkUser").classList.remove("ppg");
        document.getElementById("checkUser").classList.remove("ggr");
    }
    document.getElementById("errorUser").innerHTML = errorUser;
}

function checkEmail() {
    let email = document.getElementById("checkMail").value;
    let errorEmail = "";
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        errorEmail = "";
        document.getElementById("checkMail").classList.remove("ppr");
        document.getElementById("checkMail").classList.add("ppg");
    } else {
        errorEmail = "Vui lòng nhập địa chỉ email hợp lệ";
        document.getElementById("checkMail").classList.remove("ppg");
        document.getElementById("checkMail").classList.add("ppr");
    }
    document.getElementById("errorMail").innerHTML = errorEmail;
}

function checkPhoneNumber() {
    let phoneNumber = document.querySelector('input[type="text"]').value;
    let errorPhoneNumber = "";
    let phoneNumberPattern = /^[0-9]{10}$/;
    if (phoneNumberPattern.test(phoneNumber)) {
        errorPhoneNumber = "";
    } else {
        errorPhoneNumber = "Vui lòng nhập số điện thoại hợp lệ";
    }
    document.getElementById("errorPhoneNumber").innerHTML = errorPhoneNumber;
}

function checkPas() {
    let x = document.getElementById("checkPass").value;
    let errorPas = "";
    if (x.length >= 8 && x.length < 20) {
        errorPas = "";
        document.getElementById("checkPass").classList.remove("ppr")
        document.getElementById("checkPass").classList.add("ppg")
    }

    else{
        errorPas = "Vui lòng nhập mật khẩu từ 8 kí tự trở lên";
        document.getElementById("checkPass").classList.remove("ppg")
        document.getElementById("checkPass").classList.add("ppr")
    }
    document.getElementById("errorPas").innerHTML = errorPas;
}