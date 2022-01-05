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

// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// .then(data = function(data){
//     console.log(data)
//     data.forEach(product => {
//         document.querySelector('.products').innerHTML += `
//         <div class = "item">
//             <h4>${product.title}</h4>
//             <img src = ${product.image}>
//             <p>${product.price}</p>
//             <p>${product.description}</p>
//         </div>
//         `
//     });
// })

// fetch('https://api.kanye.rest/')
// .then(response => response.json())
// .then(data = (data) => {
//     document.querySelector('.kanye').innerHTML += `
//     <h1>${data.quote}</h1> 
// `
// })

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
.then(response => response.json())
.then(data = (data) => {
    console.log(data);
    document.querySelector('.charizard').innerHTML += `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src = '${data.sprites.front_default}'>
            </div>
            <div class="flip-card-back">
                <div class = "headings">
                    <h1>CHARIZARD</h1>
                    <h3>TYPE</h3>
                    <p>${data.types[0].type.name}</p>
                    <h3>ABILITIES</h3>
                    <p>${data.abilities[0].ability.name}</p>
                    <p>${data.abilities[1].ability.name}</p>
                    <h3>STATS</h3>
                </div>
                <div class = "stats">
                    <div>
                        <h5>HP</h5>
                        <p> <span>Base Stat: </span>${data.stats[0].base_stat}</p>
                    </div>
                    <div>
                        <h5>ATTACK</h5>
                        <p> <span>Base Stat: </span>${data.stats[1].base_stat}</p>
                    </div>
                    <div>
                        <h5>DEFENSE</h5>
                        <p> <span>Base Stat: </span>${data.stats[2].base_stat}</p>
                    </div>
                    <div>
                        <h5>S-ATTACK</h5>
                        <p> <span>Base Stat: </span>${data.stats[3].base_stat}</p>
                    </div>
                    <div>
                        <h5>S-DEFENSE</h5>
                        <p> <span>Base Stat: </span>${data.stats[4].base_stat}</p>
                    </div>
                    <div>
                        <h5>SPEED</h5>
                        <p> <span>Base Stat: </span>${data.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})


