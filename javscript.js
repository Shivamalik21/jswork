let op=document.querySelector("p")
let pan = document.querySelector(".span")

let sp= document.createElement("div");
 
sp.style.width="150px";
sp.style.height="100px";

sp.style.display="none"
sp.style.justifyContent="center"
sp.style.alignItems="center"
sp.style.marginLeft="50%"
sp.style.marginTop="5%"
sp.style.color="green"
sp.style.boxShadow="1px 3px 5px #888888"
document.body.appendChild(sp);



window.addEventListener("keydown",(event)=>{
    op.innerText= "You pressed"
    pan.innerText=event.key
   pan.style.color="green"
   sp.style.display="flex"
    sp.innerText=event.keyCode
    console.log(event);


})

