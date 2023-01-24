let container =document.querySelector('.card-container')
let cards=document.querySelector('.cards')
container.appendChild(cards)

let titeleContent=['Product 1','Product 2','Product 3','Product 4','Product 5','Product 6']
let images=['img/e.jpg','img/e1.jpg','img/e3.jpg','img/e4.jpg','img/e5.jpg','img/e6.jpg']


function element(titeleContent,images)
{
let cardContent=document.createElement('div')
cardContent.classList=('card')
let title=document.createElement('h1')
let img=document.createElement('img')
let para=document.createElement('p')

let head=document.createTextNode(titeleContent)
img.src=(images)
let paraContent=document.createTextNode('We garantie to you the best quality ')

title.appendChild(head)
para.appendChild(paraContent)



cardContent.appendChild(title)
cardContent.appendChild(img)
cardContent.appendChild(para)

cards.appendChild(cardContent)

}

for(let c=0;c<6;c++)
{
element(titeleContent[c],images[c])
}
