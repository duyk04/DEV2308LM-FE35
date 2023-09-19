// alert("Xin chào");
// I, Biến
// Khai báo
// var tên biến = value
// value => quy định kiểu giữ liệu của biến
// value = số ==> datatype = số
// value = chữ ==> datatype = chuỗi
var a1 = 100; // a1 kiểu dữ liệu bằng số
var a2 = "dev"// a2 kiểu dữ liệu bằng chuỗi

// 2, Toán tử
// Các phép số học: +, -, *, /, %

var x1 = 10;
var x2 = 50;
var x3 = x1 + x2;
// ==> Quy tắc phép cộng
// số + số = số
// chuỗi + chuỗi = chuỗi
// chuỗi + số || số + chuỗi  ==> chuỗi

console.log("Giá trị của x3 =", x3); // giữ nguyên datatype
console.log("Giá trị của x3 = " + x3); // giá trị chuyển về chuỗi


// các phép toán logic:
// So sánh: ==, >, <, >=, <=, ===
// điều kiện: &&, || , !


//Khai báo 2 số nguyên bất kỳ tính hiệu số lớn trù số bé

// 2. Cấu trúc điều kiện
// if - else ; swich - case
// cú pháp
// if (điều kiện){
//     các câu lệnh js sẽ dc thực thi nếu điều kiện = true...
// } else{
//     ... các câu lệnh js sẽ dc thực hiện nếu điều kiện = false
// }

var s1 = 50;
var s2 = 100;
var hieu;
if (s1 > s2) {
    hieu = s1 - s2;
    console.log("Hiệu hai số là ", hieu)
} else {
    hieu = s2 - s1;
    console.log("Hiệu hai số là ", hieu)
}
// bt1 biện luận pt bậc 1 có dạng ax+b=0 với mọi a
var a = 10;
var b = 100;
if (a == 0) {
    if (b == 0) {
        console.log("Phương trình có vô số nghiệm")
    } else {
        console.log("Phương trình vô nghiệm")
    }
} else {
    console.log("Phương trình có 1 nghiêm", -b / a);
}

// khai báo 3 biến là 3 cạnh cảu 1 tam giác
// biện luận các trường hợp của tam giác
var c1 = 20;
var c2 = 30;
var c3 = 40;

var max = c1;
if (c2 > max && c2 > c3) {
    max = c2;
}
else if (c3 > max && c3 > c1) {
    max = c3
}
else {
    max = c1;
}
console.log("max= ", max)

if (c1 + c2 > c3 && c1 + c3 > c2 && c2 + c3 > c1) {// kiểm tra 3 cạnh của 1 tam giác
    if (c1 == c2 && c2 == c3) {
        console.log("Tam giác đều")
    }
    else if (c1 * c1) {

    }
} else {
    console.log("Ba cạnh nhập vào ko đúng")
}

// btvn2 biện luận phương trình bậc 2

// swich case

// vòng lập for
// for ; while ; do - while
// cú pháp
// for (đếm; điều kiện; hành động) {
//     thân for: js
// }
for (var i = 0; i < 10; i++) {
    console.log(i);
};


// mảng array
// khái niệm : tập hợp các phần tử bất kỳ
// đặc điểm mỗi phần tử dc đánh index từ 0 đến cuối -1
// tương tác với các phần tử qua index : tên_mảng[index]
// khai báo
var array = new Array();
var array2 = [1, 2, 3, 4, 5, "6", "7", "8", "9"]
console.log("Phần tử có index = 4 là", array2[4])
for (var i = 0; i < array2.length; i++) {
    console.log(array2[i]);
};
console.log("Phần tử có index = 4 là", array2[4])
//
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 3, 2, , 0, 3, 3, 445, 53, "885efs"]

for (var i = 0; i < array3.length; i++) {
    if (array3[i] % 2 == 1) {
        console.log(array3[i]);
    }
};

// cho một mảng số bất kỳ yêu cầu tính tổng các giá trị trong mảng
var array4 = [1, 2, 3, 4, 5, "6", "7", "8", "9", 10]
var sum = 0;
for (var i = 0; i < array4.length; i++) {
    sum += parseInt(array4[i])
}
console.log("Tổng mảng", sum)

//btvn: tính tích tất cả các phần tử (convert về số)
// tính tổng và tích các phần tử ở vị trí chăn
// triển khai vd về swich- case / if- else (ngày tháng)