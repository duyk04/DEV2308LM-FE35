var listItems = [
    {
        id: 1,
        name: "Sản phẩm 1",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 200000,
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 500000,
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 900000,
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 100000,
    },
    {
        id: 5,
        name: "Sản phẩm 5",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 400000,
    },
    {
        id: 6,
        name: "Sản phẩm 6",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 300000,
    },
    {
        id: 7,
        name: "Sản phẩm 7",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 200000,
    },
    {
        id: 8,
        name: "Sản phẩm 8",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=1920&q=75",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis.",
        price: 900000,
    },

]

function showItems(size) {
    $("#list-item").html('');
    for (let i = 0; i < size && i < listItems.length; i++) {
        var item = `<div class="col-3">
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
            var item = `<div class="col-3">
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
            var item = `<div class="col-3">
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