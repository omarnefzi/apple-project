

// carousel js




const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {

  if (curSlide === maxSlide) {
    curSlide++;
    curSlide = 0;

  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const prevSlide = document.querySelector(".btn-prev");


prevSlide.addEventListener("click", function () {

  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});



let carouselContainer=document.querySelector('.carousel-container')






// credit card js


let payCard=document.querySelector('.pay-card')
let btnCard=document.querySelector('#button')
let plusKey=document.querySelector('#plus-key')
let minusKkey=document.querySelector('#minus-key')

function showKey(){
    plusKey.addEventListener('click',function(){
        payCard.style.backgroundImage='url(img/credit-card2.jpg)'
        payCard.style.backgroundSize='cover'
        minusKkey.style.display='block'
        plusKey.style.display='none'
        payCard.style.animation= 'fadeIn'
        payCard.style.animationDuration='2s'
        payCard.style.transform= "scale(1.2)"
    })
}
showKey()

function hideKey(){
    minusKkey.addEventListener('click', function(){
        payCard.style.backgroundImage='url(img/credit-card1.jpg)'
        payCard.style.backgroundSize='cover'
        minusKkey.style.display='none'
        plusKey.style.display='block'
        payCard.style.animation= 'fadeIn'
        payCard.style.animationDuration='2s'
        payCard.style.transform= "none"

    })
}
hideKey()




//cards js
let titels=['Product 1','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8','Product 9',]
let imgs=['img/c1.jpg','img/c2.jpg','img/c3.jpg','img/c4.jpg','img/c5.jpg','img/c6.jpg','img/c7.jpg','img/c8.jpg','img/c9.jpg',]




let cardContainer=document.querySelector('.cards-container')

let cards=document.createElement('div')
cards.classList=('cards')
cardContainer.appendChild(cards)


function element(titels,imgs)
{
  
    //elements
    let cardContent=document.createElement('div')
    cardContent.classList=('card')
    let title=document.createElement('h2')
    let desc=document.createElement('p')
    let img=document.createElement('img')
    let btnCard=document.createElement('button')


    //content
    let head=document.createTextNode(titels)
    let decsContent=document.createTextNode('We garantie to you the best quality ')
    img.src=(imgs)
    let btnContent=document.createTextNode('See More')
    
  
    title.appendChild(head)
    desc.appendChild(decsContent)
    btnCard.appendChild(btnContent)


    cardContent.appendChild(title)
    cardContent.appendChild(desc)
    cardContent.appendChild(img)
    cardContent.appendChild(btnCard)
//style

cardContent.style.width='300px'
cardContent.style.background='#fff'
cardContent.style.color='#000'
cardContent.style.padding='10px'
cardContent.style.margin='45px'
btnCard.style.width='60%'
img.style.width=100%



    cards.appendChild(cardContent)


}
for(let c=0;c<9;c++)
{
element(titels[c],imgs[c])
}





//scroll js




let btn=document.getElementById('btn')

window.onscroll=function(){
    if(scrollY >=400){
        btn.style.display=('block')

    }else{
           btn.style.display=('none')
    }
}

btn.onclick=function(){
  scroll({
        left:0,
        top:0,
        behavior:'smooth',
    })
}




