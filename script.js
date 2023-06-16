const img = document.querySelectorAll('#imgs');
const machine = document.querySelector('.machine');
const btn = document.querySelector('#btn');
let selected;
for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', ()=>{
        selected = i;
        for(let x = 0; x < img.length; x++){
            if(x === selected)
                img[x].style.outline = "5px solid #2F58CD";
            else img[x].style.outline = "none";
        }
    });
}
let result;
var score1 = document.querySelector(".your-score");
var score2 = document.querySelector(".machine-score");
let your_score = 0;
let machine_score = 0;
btn.addEventListener('click', ()=>{
    if(selected != undefined){
        let ai = Math.random()*3;
        if(ai < 1) result = 0;
        else if(ai < 2) result = 1;
        else result = 2;
        if(result == 0) machine.firstElementChild.textContent = "rock";
        else if(result == 1) machine.firstElementChild.textContent = "paper";
        else machine.firstElementChild.textContent = "scissors";
        if(result === selected){
            machine.lastElementChild.innerHTML = "<span class = 'blue'> DRAW </span>";
            machine.style.display = "block";
            your_score += 1;
            machine_score += 1;
            score1.innerHTML = "Your score : " +your_score;
            score2.innerHTML = " Machine's Score : " +machine_score;
        }
        else if(result === 0 && selected === 1 || result === 1 && selected === 2 || result === 2 && selected === 0){
                machine.lastElementChild.innerHTML = "<span class = 'green'> YOU WIN </span>";
                machine.style.display = "block";
                your_score += 1;
                score1.innerHTML = "Your score : " +your_score;
            }else{ 
                machine.lastElementChild.innerHTML = "<span class = 'red'> YOU LOSE </span>";
                machine.style.display = "block";
                machine_score += 1;
                score2.innerHTML = " Machine's Score : " +machine_score;
        }
    }
    else{
        alert("Please choose something!")
    }
});