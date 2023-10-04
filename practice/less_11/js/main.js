var listContent = [
    {
        id: 1,
        img: '../img/B0AFC546.jpeg',
        title: "Title-1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
    {
        id: 2,
        img: '../img/B0AFC546.jpeg',
        title: "Title-2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
    {
        id: 3,
        img: '../img/B0AFC546.jpeg',
        title: "Title-3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
    {
        id: 4,
        img: '../img/B0AFC546.jpeg',
        title: "Title-4",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
    {
        id: 5,
        img: '../img/B0AFC546.jpeg',
        title: "Title-5",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
    {
        id: 6,
        img: '../img/B0AFC546.jpeg',
        title: "Title-6",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam velit voluptas incidunt officia modi nisi quod ratione consequatur quos, voluptatum deserunt facere, quibusdam esse!"
    },
];

for (let i = 0; i < listContent.length; i++) {
    var view = `<div class="card-content card-${listContent[i].id}">
                    <div class="img-content">
                        <img src="${listContent[i].img}" alt="img" class="w-100">
                    </div>
                    <div class="title-content">
                        <h3>${listContent[i].title}</h3>
                    </div>
                    <div class="main-content">
                        <p>${listContent[i].content}</p>
                    </div>
                </div>`;
    $('.list-content').append(view)
}