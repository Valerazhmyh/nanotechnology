let menuItem = document.querySelectorAll('.menu-item');
for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("mouseenter", showSub);
    menuItem[i].addEventListener("mouseleave", hideSub);
}

function showSub(){
 if(this.children.length > 1){
     this.children[1].style.height = 'auto';
     this.children[1].style.overflow = 'visible';
     this.children[1].style.opacity = '1';
 }
}

function hideSub(){
    if(this.children.length > 1){
        this.children[1].style.height = "0px";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = '0';
    }
}

let img = document.querySelector('.image');
img.onmouseenter = function (){
    this.src = '2.jpg';
}
img.onmouseleave = () => {
    img.src = '1.jpg';
}

console.log(document.fullscreenEnabled);

let images = document.querySelectorAll('img');
for(let i = 0; i < images.length; i++){
images[i].addEventListener('click', function(){
    if (document.fullscreenEnabled && document.fullscreenElement === null){
        this.requestFullscreen();
    }
    else{
        document.exitFullscreen();
    }
})}

