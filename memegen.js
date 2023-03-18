
const imageURL = document.querySelector('#imageURL')
const topInput = document.querySelector('#topText')
const bottomInput = document.querySelector('#bottomText')
const memeSpace = document.querySelector('#memeSpace')


const form = document.querySelector('#memeform')
form.addEventListener('submit', function(event) {
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('thumbnail','memeDiv');
    memeDiv.addEventListener('click', function(event){
        memeDiv.remove()
    })
    
    const newImg = document.createElement('img');
    newImg.setAttribute('src', imageURL.value);
    newImg.classList.add('thumbnail',);
    memeDiv.append(newImg);

    const remove = document.createElement('h2');
    remove.innerText = "X"
    remove.classList.add('overlay')

    const topText = document.createElement('span');
    topText.innerText = topInput.value;
    const bottomText = document.createElement('span');
    bottomText.innerText = bottomInput.value;
    topText.classList.add('absolutePositionTop', 'memeText');
    bottomText.classList.add('absolutePositionBottom', 'memeText');
    memeDiv.append(topText, bottomText, remove);
    memeSpace.append(memeDiv);
    
    imageURL.value = '';
    topInput.value = '';
    bottomInput.value = '';

    event.preventDefault()
})

const letters = document.querySelectorAll('.letter');

function randomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB()
    }
}, 1000)







//use the DOM to get the value of the inputs like url, top text and bottom they.
//set those inputs into a variable by using queryselector
//use the variable.value to get those value after someone click submit and then append to the area