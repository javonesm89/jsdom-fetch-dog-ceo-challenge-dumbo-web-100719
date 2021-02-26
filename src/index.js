document.addEventListener("DOMContentLoaded",()=>{
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const imageContainer = document.querySelector("#dog-image-container")
    const dogBreedsUl = document.querySelector('#dog-breeds')

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        let images = json['message']
        getImages(images)
    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        let breeds = json['message']
        getSpecificBreeds(breeds)
        getBreeds(breeds)
    })

    
    getSpecificBreeds = (breeds,letter) => {
        console.log(breeds)
    }
    
    document.getElementById('breed-dropdown').addEventListener('change',(e) => {
        let letter = e.target.value
    })
    
    getImages = (images) =>{
        for(image of images){
            let imageLi = document.createElement('li')
            let img = document.createElement('img')
            img.src = image
            img.style.display = 'inline-block'
            img.alt = 'dog-picture'
            imageLi.innerHTML = img
            imageContainer.appendChild(img)
        }
    }
    
    getBreeds = (breeds) =>{
        for(key in breeds){
            let breedLi = document.createElement('li')
            breedLi.innerText = key
            changeColor(breedLi)
            dogBreedsUl.appendChild(breedLi)
        }
    }
    
    changeColor = (breedLi) =>{
        breedLi.addEventListener('click',()=>{
            breedLi.style.color = 'red'
        })
    }
    
})



