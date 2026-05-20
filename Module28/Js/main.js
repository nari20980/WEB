// var buttoni1=document.getElementById('btn1');

// buttoni1.onclick=function(){
//     alert('elo');

// }

//**/


var buttoni2=document.getElementById('btn2');
buttoni2.onmouseover=function(){
    alert('bye')
}

var buttoni3=document.getElementById('btn3');
buttoni3.onmouseover=function(){
    alert('Good Bye')
}

var button=document.getElementById('btn1');

var txt1=document.getElementById('txt1');




button.onclick=function(){
    txt1.style.color="red";
    txt1.style.backgroundColor="lightgrey";
    txt1.style.textAlign="center";
    txt1.style.padding="20px";
}
var button4=document.getElementById('btn4');


button4.onclick=function(){
    txt1.setAttribute("class","test")
    
}