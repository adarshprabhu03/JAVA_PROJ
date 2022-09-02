const disp1=document.querySelector('#play1disp');
const disp2=document.querySelector('#play2disp');
const add1=document.querySelector('#play1add');
const add2=document.querySelector('#play2add');
const resetbut=document.querySelector("#resetbut");
const playto=document.querySelector("#playopt")
let score1=0;
let score2=0;
let isGameOver=false;
let winscore=3;
add1.addEventListener('click',function(){
    if(!isGameOver)
    {
    score1=score1+1;
    disp1.textContent=score1;
    if(score1==winscore)
    {
        isGameOver=true;
        disp1.style.color = "green";
        disp2.style.color = "red";
        add1.disabled=true;
        add2.disabled=true;

    }
    }
});
add2.addEventListener('click',function(){
    if(!isGameOver)
    {
    score2=score2+1;
    disp2.textContent=score2;
    if(score2==winscore)
    {
        isGameOver=true;
        disp2.style.color = "green";
        disp1.style.color = "red";
        add1.disabled=true;
        add2.disabled=true;
    }
    }
});
resetbut.addEventListener('click',reset)
playto.addEventListener('change',function(){
    winscore=(this.value);
    reset();

})
function reset(){
    isGameOver=false;
    score1=0;
    score2=0;
    disp1.textContent=score1;
    disp2.textContent=score2;
    disp2.style.color = "black";
    disp1.style.color = "black";
    add1.disabled=false;
    add2.disabled=false;
}
