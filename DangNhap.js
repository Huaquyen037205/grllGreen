function checkUs () {
    let x = document.getElementById("checkUser").value;
    let errorUser = "";
    if (x.length >= 8 && x.length < 20) {
        errorUser = "";
        document.getElementById("checkUser").classList.remove("ppr")
        document.getElementById("checkUser").classList.add("ppg")
    }

    else{
        errorUser = "Vui lòng nhập từ 8 kí tự trở lên";
        document.getElementById("checkUser").classList.remove("ppg")
        document.getElementById("checkUser").classList.add("ppr")
    }
    document.getElementById("errorUser").innerHTML = errorUser;
}



function checkPas () {
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
    document.getElementById("errorUser").innerHTML = errorPas;
}