let light=document.getElementById("Light");
let main=document.getElementById("main");
let text_main=document.getElementById("text_main");
let name_main=document.getElementById("name_main");
let minenav=document.getElementById("minenav");
let navcolor=document.getElementsByClassName("nav-link");
let about=document.getElementById("About");
let skills=document.getElementById("skills");
let work=document.getElementById("work");
let contact=document.getElementById("contact");
let footer=document.getElementById("footer");
let btn=document.getElementById("btn");



light.addEventListener("click",()=>{
if(light.textContent=="Light")
{
  light.textContent="dark";
  main.style.background="#fff";
  minenav.style.background="#fff";
  text_main.style.color="#000";
  name_main.style.color="#000";
  for(let i=0;i<=4;i++){
  navcolor[i].style.color="#000";
  };
  about.style.background="#fff"
  skills.style.background="#fff"
  work.style.background="#fff"
  contact.style.background="#fff"
  footer.style.background="#fff"
  btn.style.background="#000"

}
else
{
  main.style.background="#000";
  minenav.style.background="#000";
  light.textContent="Light";
  text_main.style.color="#fff";
  name_main.style.color="#fff";
  for(let i=0;i<=4;i++){
    navcolor[i].style.color="#fff";
    }
    about.style.background="#000"
    skills.style.background="#000"
    work.style.background="#000"
    contact.style.background="#000"
    btn.style.background="#fff"

}
})