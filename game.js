let images=[{id:1,url:"images/rock.png" ,name:"rock"},{id:2,url:"images/scissors.png",name:"scissors"},{id:3,url:"images/paper.png",name:"paper"}];
const playBtn=document.getElementById('btnPlay');
const display =document.querySelector(' .game-display')
const wins= document.querySelector("#win")
const lost= document.querySelector("#lost")
const decider=document.querySelector(' #decider');
const resetBtn=document.querySelector('#resetBtn');
const myAnswer=document.querySelector('.answer-container');
playBtn.addEventListener("click", function(){
display.style.display="block"
})
window.onclick=function(e){
if(e.target===display){
    display.style.display="none"
}
}
images.map(image=>{
return(
    display.innerHTML+=
    `
    <img src="${image.url}" alt="${image.name}" onclick="selectfunc(${image.id })">
    `
)
})

let answer=[]
function displayRandomImage(){
    answer.map(image=>{
        myAnswer.innerHTML=""
        return(
            myAnswer.innerHTML+=
            `
            <img class="img" src="${image.url}">
            `
        )
    })
}
function selectfunc(id){
answer.forEach(image =>{
    
if(image.id==id){
    decider.textContent="You draw"
    return false
}
if(id==1){
    if(image.id==2){
        decider.innerText="You win"  
        wins.innerHTML++
    }
}else if(id==2){
    if(image.id==3){
        decider.innerText="You win"  
        wins.innerHTML++
    }
}else if(id==3){
    if(image.id==2){
        decider.innerText="You loss"  
        lost.innerHTML++
    }
}else if(id==1){
    if(image.id==3){
        decider.innerText="You loss"  
        lost.innerHTML++
    }
}
else if(id==3){
    if(image.id==1){
        decider.innerText="You win"  
        wins.innerHTML++
    }
}
})
randomImage()
}
resetBtn.addEventListener("click",function(){
    wins.innerHTML=0
    lost.innerHTML=0
})
function randomImage(){
    let pic = images[Math.floor(Math.random() * images.length )]
    answer.push(pic)
    displayRandomImage()
}
