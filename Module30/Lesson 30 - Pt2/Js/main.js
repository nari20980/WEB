var wakeuptime;
var dstime;
var sleeptime;
var noon=12;


function showcurrentTime(){
    var clock=document.getElementById('clock')
    var currentTime=new Date();

    
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();

    var meridian="AM"


    if(hours>=12){
        meridian="Pm"
    }

    var clocktime= hours + ":" + minutes+ ":" + seconds + ":" + meridian;
    clock.innerText=clocktime;
//NA DUHET ME THIRR FUNKSIONIN QE E NDRRON FOTON


}
var oneSecond=1000;
setInterval(showcurrentTime,oneSecond)

function changeImage(){
    var time=new Date().getHours();
    console.log(time);



    var image="img/ds_clock.png";
    var imageHTML   =document.getElementById("timeImage")

    if(time==wakeuptime){
        image="img/morning.png";
        console.log("morning");
    }else if(time==dstime){
        image="img/class.gif";

    }else if(time==sleeptime){
        image="img/night.gif";  
}

imageHTML.src=image;
console.log(imageHTML.src);




}

function updateclock(){
    var wakeUpTime=document.getElementById('wakeUpTimeSelecor');
    wakeUpTime==wakeUpTime.value;

    var dsTime=document.getElementById('dsTimeSelecor');
    dsTime==dsTime.value;


    var sleepTime=document.getElementById('sleepTimeSelecor');
    sleepTime==sleepTime.value;

}
var savebutton=document.getElementById('saveButton');

savebutton.addEventListener("click")






