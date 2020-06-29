const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'duyquyen.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// console.log(app);
// var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function() {
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//         data.forEach((movie) => {
//             //create a div with card class
//             const card = document.createElement('div');
//             card.setAttribute('class', 'card');

//             //create h1 set is a title
//             const h1 = document.createElement('h1');
//             h1.textContent = movie.title;

//             //create p tag set is a content div
//             const p = document.createElement('p');
//             movie.description = movie.description.substring(0, 300); //limit 300 chareacter
//             p.textContent = `${movie.description}...`;

//             container.appendChild(card);
//             card.appendChild(h1);
//             card.appendChild(p);
//         })
//     } else {
//         const errorMess = document.createElement('marquee');
//         errorMess.textContent = 'Something wrong !';
//         app.appendChild(errorMess);
//     }
// }
// request.send();
const userAction = async() => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const myJson = await response.json();
    if (response.status == 200) {
        myJson.forEach((data) => {
            //create list card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //create H1 and set is title
            const h1 = document.createElement('h1');
            h1.textContent = data.title;

            //create p tag and set it is description
            const p = document.createElement('p');
            data.description = data.description.substring(0, 300); //limit 300 charater before display
            p.textContent = `${data.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        })
    }
}

$(document).ready(function() {
    userAction();
});