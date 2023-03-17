
const imageURL = document.querySelector('#imageURL')
const bottomInput = document.querySelector('#bottomText')
const memeSpace = document.querySelector('#memeSpace')


const form = document.querySelector('#memeform')
form.addEventListener('submit', function(event) {
    const newImg = document.createElement('img')
    newImg.setAttribute('src', imageURL.value)
    newImg.classList.add('thumbnail')
    memeSpace.append(newImg)
    imageURL.value = ''
    event.preventDefault()
})









//use the DOM to get the value of the inputs like url, top text and bottom they.
//set those inputs into a variable by using queryselector
//use the variable.value to get those value after someone click submit and then append to the area