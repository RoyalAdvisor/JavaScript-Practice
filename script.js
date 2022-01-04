// let content = [
//     {
//         img_url: "https://picsum.photos/200/300?random=1",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=2",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=3",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=4",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=5",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=6",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=7",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=8",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=9",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     },
//     {
//         img_url: "https://picsum.photos/200/300?random=10",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
//     }
// ]

// for (let item of content) {
//     document.getElementById("content").innerHTML += `<img src = "${item.img_url}">, <p>"${item.text}"</p>`
// }


// let content = {
//     img_url: "https://picsum.photos/200/300?random=",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorem quis! Earum laudantium illo incidunt.",
// }


// for(let i = 1; i <=9; i++){
//     document.getElementById("content").innerHTML += `<img src = "${content.img_url + i}">, <p>"${content.text}"</p>


// let x = 9
// let y = 5
// z = () => Math.round(x + y / y * x * y)
// console.log(z())

// function getCircumference(radius){
//     return 2 * Math.PI * radius
// }

// console.log(getCircumference(3));



// let word = document.querySelector('#content').innerText; 

// let char = word.split("");

// const randomIndex = Math.round(Math.random() * char.length);

// char[randomIndex] = char[randomIndex].toUpperCase();

// document.querySelector('#content').innerText = char.join("");

// let input = [1,2,3]

// sum = (input) => {
//     let sum = 0
//     for (let i = 0; i < input.length; i++) {
//         if (typeof input[i] === 'string') {
//             continue;
//         }
//         sum += input[i];
//     }
// }

// console.log(sum(input))

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data = function(data){
    console.log(data)
    data.forEach(product => {
        document.querySelector('#products').innerHTML += `
        <div class = "item">
            <h4>${product.title}</h4>
            <img src = ${product.image}>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </div>
        `
    });
})


