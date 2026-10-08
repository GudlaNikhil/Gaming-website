let video = document.querySelector('.car-racing-vid');

video.addEventListener('mouseenter',() =>{
    video.currentTime = 0;
    video.play();
});

let video1 = document.querySelector('.football-vid');

video.addEventListener('mouseenter',() =>{
    video1.currentTime = 0;
    video1.play();
});

let video2 = document.querySelector('.cricket-vid');

video.addEventListener('mouseenter',() =>{
    video2.currentTime = 0;
    video2.play();
});

function theme(){

    const bg = getComputedStyle(document.body).backgroundColor;

    if(bg === 'rgb(0, 0, 0)'){
        document.body.style.backgroundColor = 'white';
    }
    else{
        document.body.style.backgroundColor = 'black';
    }
}