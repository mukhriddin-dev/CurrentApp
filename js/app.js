"use strict";
const uzs=document.querySelector("#uzs");
const usd=document.querySelector("#usd");
const uer=document.querySelector("#eur");
const rub=document.querySelector("#rub");

uzs.addEventListener('input',()=>{

  const  request=new XMLHttpRequest();

  request.open('GET','js/current.json');
  request.setRequestHeader('Content-type','app/json');
  request.send();


request.addEventListener('load',()=>{
  const inFo=request.response;
 if(request.readyState===4 && request.status===200){
   const uzDate=JSON.parse(request.response);
   usd.value=+(uzs.value/uzDate.current.usd).toFixed(2);
   uer.value=+(uzs.value/uzDate.current.eur).toFixed(2);
   rub.value=+(uzs.value/uzDate.current.rub).toFixed(2);
 }else{
   uzs.value="error";
 }


});






//  open  => motor key
//  readyState => 0 , 1 , 2 , 3 , 4 Done
//  status => 100 , 200 , 300 , 400 , 500
//  statusText => succses or error

//  response => serverni javobi

})