var listItems = [
    {
        id: 1,
        name: "Sản phẩm 1",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 200000,
        class: "Nam",
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 500000,
        class: "Nữ",
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 900000,
        class: "Nam",
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 100000,
        class: "Nam",
    },
    {
        id: 5,
        name: "Sản phẩm 5",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 400000,
        class: "Nữ",
    },
    {
        id: 6,
        name: "Sản phẩm 6",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 300000,
        class: "Nam",
    },
    {
        id: 7,
        name: "Sản phẩm 7",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 200000,
        class: "Nữ",
    },
    {
        id: 8,
        name: "Sản phẩm 8",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 900000,
        class: "Nữ",
    },

]

for (let i = 0; i < listItems.length; i++) {
    var item = `<div class="col-3 mb-5">
                    <div class="card ">
                        <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <p>Giá: ${listItems[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
    $('#list-item').append(item);
}
function showItems(size) {
    $("#list-item").html('');
    for (let i = 0; i < size && i < listItems.length; i++) {
        var item = `<div class="col-3 mb-5">
                    <div class="card">
                        <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <p>Giá: ${listItems[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
        $('#list-item').append(item);
    }
}

function search() {
    $("#list-item").html('');
    var check = false;
    var title = $(".search").val();

    //include:"Chuỗi giá trị".include("Giá trị cần so sánh")\
    // convert String to: uper / lower
    // 'dev master' != " dev , master" ==> repalceAll(" ", " ")
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].name.toLowerCase().includes(title.toLowerCase())) {
            var item = `<div class="col-3 mb-5">
                    <div class="card">
                        <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <p>Giá: ${listItems[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            $('#list-item').append(item);
            check = true;
        }
    } if (!check) {
        console.log("ko co du lieu!!");
        $('#list-item').append(`<h4 class="text-center" style="color: red;">Không tìm thấy sản phẩm!</h4>`);
    }

}

function checkPrice() {
    $("#list-item").html('');
    var check = false;
    var priceMin = $(".search-price-min").val();
    var priceMax = $(".search-price-max").val();
    for (let i = 0; i < listItems.length; i++) {
        if (parseInt(priceMin) <= listItems[i].price && parseInt(priceMax) >= listItems[i].price) {
            var item = `<div class="col-3 mb-5">
                    <div class="card">
                        <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <p>Giá: ${listItems[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            $('#list-item').append(item);
            check = true;
        }
    } if (!check) {
        console.log("ko co du lieu!!");
        $('#list-item').append(`<h4 class="text-center" style="color: red;">Không tìm thấy sản phẩm!</h4>`);
    }
}

function sapXepTangDan() {
    // $("#list-item").html('');
    // for (let i = 0; i < listItems.length - 1; i++) {
    //     for (let j = i + 1; j <= listItems.length; j++) {
    //         if (listItems[j].price < listItems[i].price) {
    //             let temp;
    //             temp = listItems[i];
    //             listItems[i] = listItems[j];
    //             listItems[j] = temp;
    //         }
    //     }
    // }
    listItems.sort((a, b) => a.price - b.price);

    var listContainer = $("#list-item");
    listContainer.empty(); // Xóa nội dung cũ

    for (let i = 0; i < listItems.length; i++) {
        var item = `
            <div class="col-3 mb-5" style="opacity: 0;">
                <div class="card">
                    <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listItems[i].name}</h5>
                        <p class="card-text">${listItems[i].content}</p>
                        <p>Giá: ${listItems[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        listContainer.append(item);
    }

    // Hiển thị từ từ từng thẻ một
    var delay = 100; // Độ trễ giữa các mục (miligiây)
    var items = listContainer.find(".col-3");
    items.each(function (index) {
        $(this).delay(index * delay).animate({ opacity: 1 }, 1500); // 800 miligiây cho thời gian hiệu ứng
    });
}
function sapXepGiamDan() {
    // $("#list-item").html('');
    // listItems.sort((a, b) => b.price - a.price);

    // var listContainer = $("#list-item");
    // listContainer.empty(); // Xóa nội dung cũ
    // for (let i = 0; i < listItems.length; i++) {
    //     var item = `
    //         <div class="col-3">
    //             <div class="card mb-5">
    //                 <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${listItems[i].name}</h5>
    //                     <p class="card-text">${listItems[i].content}</p>
    //                     <p>Giá: ${listItems[i].price}</p>
    //                     <a href="#" class="btn btn-primary">Go somewhere</a>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     listContainer.append(item);
    // };
    listItems.sort((a, b) => b.price - a.price);

    var listContainer = $("#list-item");
    listContainer.empty(); // Xóa nội dung cũ

    for (let i = 0; i < listItems.length; i++) {
        var item = `
            <div class="col-3 mb-5" style="opacity: 0;">
                <div class="card">
                    <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listItems[i].name}</h5>
                        <p class="card-text">${listItems[i].content}</p>
                        <p>Giá: ${listItems[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        listContainer.append(item);
    }

    // Hiển thị từ từ từng thẻ một
    var delay = 100; // Độ trễ giữa các mục (miligiây)
    var items = listContainer.find(".col-3");
    items.each(function (index) {
        $(this).delay(index * delay).animate({ opacity: 1 }, 1500); // 800 miligiây cho thời gian hiệu ứng
    });
}
function class1() {
    var listContainer = $("#list-item");
    listContainer.empty(); // Xóa nội dung cũ
    var temp = "Nam";
    for (let i = 0; i < listItems.length; i++) {
        if (temp === listItems[i].class) {
            var item = `
            <div class="col-3 mb-5" style="opacity: 0;">
                <div class="card">
                    <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listItems[i].name}</h5>
                        <p class="card-text">${listItems[i].content}</p>
                        <p>Phân loại: ${listItems[i].class}</p>
                        <p>Giá: ${listItems[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
            listContainer.append(item);
        }
    }

    // Hiển thị từ từ từng thẻ một
    var delay = 100; // Độ trễ giữa các mục (miligiây)
    var items = listContainer.find(".col-3");
    items.each(function (index) {
        $(this).delay(index * delay).animate({ opacity: 1 }, 1500); // 800 miligiây cho thời gian hiệu ứng
    });
}
function class2() {
    var listContainer = $("#list-item");
    listContainer.empty(); // Xóa nội dung cũ
    var temp = "Nữ";
    for (let i = 0; i < listItems.length; i++) {
        if (temp === listItems[i].class) {
            var item = `
            <div class="col-3 mb-5" style="opacity: 0;">
                <div class="card">
                    <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listItems[i].name}</h5>
                        <p class="card-text">${listItems[i].content}</p>
                        <p>Phân loại: ${listItems[i].class}</p>
                        <p>Giá: ${listItems[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
            listContainer.append(item);
        }
    }

    // Hiển thị từ từ từng thẻ một
    var delay = 100; // Độ trễ giữa các mục (miligiây)
    var items = listContainer.find(".col-3");
    items.each(function (index) {
        $(this).delay(index * delay).animate({ opacity: 1 }, 1500); // 800 miligiây cho thời gian hiệu ứng
    });
}
function sapXep() {
    var value = $('#sapXep').val();
    switch (parseInt(value)) {
        case 1:
            sapXepTangDan();
            break;
        case 2:
            sapXepGiamDan()
            break
        case 3:
            class1()
            break
        case 4:
            class2()
            break
        default:
            break;
    }
    // if (parseInt(value) == 1) {

    // }
    // if (parseInt(value) == 2) {

    // }
    // if (parseInt(value) == 3) {
    //     class1()
    // }
    // if (parseInt(value) == 4) {
    //     class2()
    // }
}
