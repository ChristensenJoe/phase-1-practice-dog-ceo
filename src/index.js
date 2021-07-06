console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';



document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    challengeOne();
    challengeTwo();
    challengeFour();
}

function challengeFour(){
    
    let breedSelector = document.querySelector("#breed-dropdown");
     breedSelector.addEventListener('change', (e) =>{
    let allBreeds = document.querySelectorAll('li')
     removeList();   
        let currentBreeds = []
        
        allBreeds.forEach( (element) => {
            let startLetter = element.textContent.slice(0,1);
            if(startLetter === e.target.value){
                currentBreeds.push(element)
            }
        })
        console.log(currentBreeds)
        const list = document.querySelector("#dog-breeds");
        currentBreeds.forEach(element =>{
            list.append(element);
        })
        // allBreeds.forEach(element => {
        //     let startLetter = element.textContent.slice(0,1);
        //     console.log(startLetter)
        //     if(startLetter === e.target.value){
        //         element.style.visibility = 'visible'
        //     }else{
        //         element.style.visibility = 'hidden'
        //     }
        // })
        //for each
        //invisible all elements that don't match
     })
}

function removeList(){
    document.querySelectorAll('li').forEach(element => element.remove())
}

function fontChanger(e){
    e.target.style.color = 'red';
}

function challengeTwo() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
        const list = document.querySelector("#dog-breeds");
        for(breed in json.message) {
            let breedItem = document.createElement("li");
            breedItem.addEventListener('click', fontChanger)
            breedItem.textContent = breed;
            if(json.message[breed].length > 0) {
                let subList = document.createElement("ul");
                json.message[breed].forEach((element) => {
                    let subBreed = document.createElement("li");
                    subBreed.textContent = element;
                    subBreed.addEventListener('click', fontChanger)
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