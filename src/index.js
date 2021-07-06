console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", domLoaded());

function domLoaded() {
    challengeOne();
    challengeTwo();
}

function challengeTwo() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
        const list = document.querySelector("#dog-breeds");
        for(breed in json.message) {
            let breedItem = document.createElement("li");
            breedItem.textContent = breed;
            if(json.message[breed].length > 0) {
                let subList = document.createElement("ul");
                json.message[breed].forEach((element) => {
                    let subBreed = document.createElement("li");
                    subBreed.textContent = element;
                    subList.append(subBreed);
                });
                breedItem.append(subList);
            }
            list.append(breedItem);
        }
    });
}

function challengeOne() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => {
        json.message.forEach((element) => {
            const dogImgContainer = document.querySelector("#dog-image-container");
            let img = document.createElement("img");
            img.src = element;
            dogImgContainer.append(img);
        });
    });
}