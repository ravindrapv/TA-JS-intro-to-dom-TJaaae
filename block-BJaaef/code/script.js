// let rootEle = document.querySelector('ul');
// got.houses.forEach((ele) => {
//     let li = document.createElement('li');
//     let img = document.createElement('img');
//     img.src = ele.image
//     let h1 = document.createElement('h1');
//     h1.innerHTML = ele.name
//     let h2 = document.createElement('h2');
//     h2.innerHTML = ele.description

//     li.append(img,h1,h2);
//     rootEle.append(li);

// })

let parentElm = document.querySelector(".main");

let allPeople = got.houses.reduce((acc,cv) =>{
    acc = acc.concat(cv.people);
    return acc; 
},[]);
let cardsHTML = allPeople.map((person) => {
    return `
    <div class="col box">
    <img src= ${person.image}
    alt = ${person.name}/>
    <h2> ${person.name}</h2>
    <p>${person.description}</p>
    <button><a href=${person.wikiLink}>Learn More!</a></button>
  </div>
    `
});

parentElm.innerHTML = cardsHTML.join("");