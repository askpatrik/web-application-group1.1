const container = document.querySelector('.IContainer');
const URL = 'http://api.adorable.io/avatars/'


/* 1 get a batch of images and append to container div */

function getRandNum(){
    return Math.floor(Math.random() * 100)
}

function loadImages(numImages =10){
    let i = 0;
    while(i < numImages){
        const img = document.createElement('img')
        img.src = '${URL}${getRandNum()}'
        container.appendChild(img)
        i++
        
    }
}
loadImages()
/* 2 listen for a scroll event and load more images if we
reach the bottom of the window */