let rootEle = document.querySelector('ul');
got.houses.forEach((ele) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = ele.image
    let h1 = document.createElement('h1');
    h1.innerHTML = ele.name
    let h2 = document.createElement('h2');
    h2.innerHTML = ele.description

    li.append(img,h1,h2);
    rootEle.append(li);

})