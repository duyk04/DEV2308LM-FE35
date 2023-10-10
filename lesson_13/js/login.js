var dataUser = [
    {
        id: 1,
        username: "duyk04",
        password: 4444,
        fullname: "Nguyen Khuong Duy",
        age: 20,
    },
    {
        id: 2,
        username: "duyk01",
        password: 1111,
        fullname: "Nguyen Khuong Duy",
        age: 19,
    },
    {
        id: 1,
        username: "duyk02",
        password: 2222,
        fullname: "Nguyen Khuong Duy",
        age: 18,
    },
]

function getInfor() {
    var username = $('[name="uname"]').val();
    var password = $('[name="psw"]').val();
    preCheck(username, password)
}

function preCheck(user, pass) {
    if (user == "" || user == undefined || pass == "" || pass == undefined) {
        alert("Username và password không được để trống!")
    }
    else {
        alert("Đang kiểm tra!")
        checkData(user, pass)
    }
}

function checkData(user, pass) {
    var check = false;
    for (let i = 0; i < dataUser.length; i++) {
        if (user == dataUser[i].username && pass == dataUser[i].password) {
            check = true;
        }
    }
    if (check) {
        window.localStorage.setItem("checkIsLogin", true);
        // window.location.href = "over_views.html"
    }
    else {
        window.localStorage.setItem("checkIsLogin", false);
        alert("Tài khoản hoặc mật khẩu ko chính xác!")
    }
}


function preCheckLogin() {
    var isLogin = localStorage.getItem("checkIsLogin");
    if (isLogin == "true") {
        alert("Đã đăng nhập!")
        window.location.href = "over_views.html"
    } else {
        console.log("Chưa đăng nhập!")
    }
}
//preCheckLogin();

function logOut() {
    localStorage.clear();
    location = "login.html"
}

$.ajax({
    url: "demo_test.txt", 
        success: function (result) {
        console.log(result)
    }
});