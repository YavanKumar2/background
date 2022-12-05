const button=document.getElementById("btn");
const body=document.body;
const colors=["red","green","blue","yellow","black"];
button.addEventListener('click',changeBackground)
function changeBackground()
{
    const colorsIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorsIndex];
}