
let currDate= new Date();
currDate=currDate.getHours();


let greet=document.getElementById("greet");


if(currDate>=0&& currDate<12){
greet.innerHTML="GOOD MORNING";
greet.style.color="green";
}
else if(currDate>=12&& currDate<19){
greet.innerHTML="GOOD AFTERNOON";
greet.style.color="yellow";
}
else {
greet.innerHTML="GOOD NIGHT";
greet.style.color="blue";
}