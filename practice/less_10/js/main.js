var array1 = ['a', 'b', 'c', 'abc', 1, 3, 5, 6, 4, 6, 2, 'dev', 'duy'];

function search(text) {
    var count = 0;
    var viTri = [];
    for (let i = 0; i < array1.length; i++) {
        if (text.toString() === array1[i].toString()) {
            count++;
            viTri.push(i);
        }
    }
    if (count > 0) {
        console.log("Gia tri '" + text + "' xuat hien " + count + " lan vi tri so " + viTri);
    } else {
        console.log("No data");
    }
}

var Data = [
    {
        id: 1,
        userName: 'user1',
        password: 'passwd1'
    },
    {
        id: 2,
        userName: 'user2',
        password: 'passwd2'
    },
];
function check() {
    var name = document.getElementById('userName').value;
    var passwd = document.getElementById('password').value;
    if (name.trim() === '' || passwd.trim() === '') {
        document.getElementById("userName").placeholder = "Vui lòng nhập tên tài khoản.";
        document.getElementById("password").placeholder = "Vui lòng nhập mật khẩu.";
        return;
    }
    var tonTai = false;

    for (var i = 0; i < Data.length; i++) {
        if (Data[i].userName === name && Data[i].password === passwd) {
            tonTai = true;
            break;
        }
    }

    if (tonTai) {
        thongBao.textContent = "Đăng nhập thành công!";
    } else {
        thongBao.textContent = "Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.";
    }

}


