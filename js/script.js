/*  
Project Name: Random Images Gallery
Description: Get random images on each refresh. I've used Unspalsh source to get these images. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const images = document.querySelector('.images')
const unsplashRandomURL = 'https://source.unsplash.com/random/'
const popup = document.getElementById('popup')
const popupImg = document.querySelector('#popup img')
const close = document.getElementById('close')
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashRandomURL}${getRandomSize()}`

    images.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 600
}

let getImagesURL = document.querySelectorAll('.images img')

getImagesURL.forEach(img => {
    img.addEventListener('click', (e) => {
        popupImg.src = e.target.src
        popup.classList.add('visible')
        popup.classList.remove('hide')
    })

    close.addEventListener('click', (e) => {
        popupImg.src = ''
        popup.classList.remove('visible')
        popup.classList.add('hide')
    })
})

function popUp () {
    popup.classList.add('hide')
}
popUp ()
