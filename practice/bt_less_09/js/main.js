// pt bac 2
var a1 = 4;
var b1 = -2;
var c1 = -6;
var del = Math.pow(b1, 2) - (4 * (a1 * c1));
if (del < 0) {
    console.log("Pt vo nghiem")
} else if (del === 0) {
    var x = -b1 / 2 * a1;
    console.log("Pt co nghiem kep x1 = x2 = ", x);
} else {
    var x1 = (-b1 + Math.sqrt(del)) / (2 * a1);
    var x2 = (-b1 - Math.sqrt(del)) / (2 * a1);
    console.log("Pt co hai nghiem phan biet x1 = ", x1, "va x2 = ", x2);
}

var array1 = [1, 2, 3, 4, 5, 6, 7, "8", "10", "12"]

// tính tổng phần tử trong mảng
var sum = 0;
for (var i = 0; i < array1.length; i++) {
    sum += parseInt(array1[i]);
}
console.log("Tong mang la: ", sum)

// tỏng các phần tư trong mảng ở vị tri chẵn
var sum2 = 0;
for (var i = 0; i < array1.length; i++) {
    if (i % 2 == 0) {
        sum2 += parseInt(array1[i]);
    }
}
console.log("Tong cac phan tu o vi tri chan trong mang la: ", sum2)


//tính tích phần tử trong mảng
var tich = 1;
for (var i = 0; i < array1.length; i++) {
    tich *= parseInt(array1[i]);
}
console.log("Tich cac so trong mang la: ", tich)

//tích các phần tử trong mảng ở vị trí chẵn
var tich2 = 1;
for (var i = 0; i < array1.length; i++) {
    if (i % 2 == 0) {
        tich2 *= parseInt(array1[i]);
    }
}
console.log("Tich cac phan tu o vi tri chan trong mang la: ", tich2)
var thang = 2;
var nam = 2023;
switch (thang) {
    case 1: // Tháng 1
    case 3: // Tháng 3
    case 5: // Tháng 5
    case 7: // Tháng 7
    case 8: // Tháng 8
    case 10: // Tháng 10
    case 12: // Tháng 12
        console.log("Thang", thang, "co 31 ngay")
        break;
    case 4: // Tháng 4
    case 6: // Tháng 6
    case 9: // Tháng 9
    case 11: // Tháng 11
        console.log("Thang", thang, "co 30 ngay")
        break;
    case 2: // Tháng 2
        if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
            console.log("Thang", thang, "co 29 ngay")
        } else {
            console.log("Thang", thang, "co 28 ngay")
        }
    default:
        if (thang <= 0 || thang > 12) {
            console.log("Thang ko hop le!!")
        }
        break

}
