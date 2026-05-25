var input=document.getElementById('input_id')
var button=document.getElementById('btn_id')
var text=document.getElementById('text_id')



button.onclick=function(){
    if(input.value > 12){
        text.innerHTML="input eshte ma i madh se 12";
    }
    else if(input.value<12){
        text.innerHTML="input eshte me i vogel se 12"


    }

    else{
        text.innerHTML="input eshte ma i barabart se 12"
    }


}