let minutes=25
let seconds=0

function startTimer(){

setInterval(()=>{

if(seconds==0){
minutes--
seconds=59
}else{
seconds--
}

document.getElementById("timer").innerText=
minutes+":"+seconds

},1000)

}
