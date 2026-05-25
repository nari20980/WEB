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
function changeImage(){
    var time=new Date().getHours();
    console.log(time);



    var image="img/ds_clock.png";
    var imageHTML   =document.getElementById("timeImage")

    if(time==wakeuptime){
        image="img/ds_clock.png";
        console.log("morning");
    }else if(time==dstime){
        image="img/class.gif";

    }




}

