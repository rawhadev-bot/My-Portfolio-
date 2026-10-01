window.addEventListener("load",()=>{
const preloader=document.querySelector(".preloader");
setTimeout(()=>{
preloader.classList.add("hide");
},700);
});

const menuButton=document.querySelector(".menu-button");
const closeMenu=document.querySelector(".close-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const mobileLinks=document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click",()=>{
mobileMenu.classList.add("open");
document.body.style.overflow="hidden";
});

closeMenu.addEventListener("click",()=>{
mobileMenu.classList.remove("open");
document.body.style.overflow="";
});

mobileLinks.forEach(link=>{
link.addEventListener("click",()=>{
mobileMenu.classList.remove("open");
document.body.style.overflow="";
});
});

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-link");

function updateNavigation(){
const currentPosition=window.scrollY+220;
sections.forEach(section=>{
const sectionTop=section.offsetTop;
const sectionHeight=section.offsetHeight;
const sectionId=section.getAttribute("id");
if(currentPosition>=sectionTop&&currentPosition<sectionTop+sectionHeight){
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#"+sectionId){
link.classList.add("active");
}
});
}
});
}

window.addEventListener("scroll",updateNavigation);

const skillsSection=document.querySelector("#skills");
const skillCards=document.querySelectorAll(".skill-card");
let skillsStarted=false;

function startSkillAnimation(){
if(skillsStarted||!skillsSection)return;
const sectionPosition=skillsSection.getBoundingClientRect().top;
const screenHeight=window.innerHeight;
if(sectionPosition<screenHeight*.8){
skillsStarted=true;
skillCards.forEach(card=>{
const percentage=card.querySelector(".skill-percentage");
const progress=card.querySelector(".progress-bar span");
const target=Number(percentage.dataset.percent);
progress.style.width=target+"%";
const duration=1400;
const startTime=performance.now();
function animateNumber(time){
const elapsed=time-startTime;
const progressValue=Math.min(elapsed/duration,1);
const easing=1-Math.pow(1-progressValue,3);
percentage.textContent=Math.floor(target*easing)+"%";
if(progressValue<1){
requestAnimationFrame(animateNumber);
}else{
percentage.textContent=target+"%";
}
}
requestAnimationFrame(animateNumber);
});
}
}

window.addEventListener("scroll",startSkillAnimation);
startSkillAnimation();

const backToTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{
if(window.scrollY>600){
backToTop.classList.add("show");
}else{
backToTop.classList.remove("show");
}
});

backToTop.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});

const profileImage=document.querySelector(".profile-image");
const imagePlaceholder=document.querySelector(".image-placeholder");

function checkImage(){
if(!profileImage.getAttribute("src")){
imagePlaceholder.style.display="flex";
return;
}
profileImage.addEventListener("load",()=>{
imagePlaceholder.style.display="none";
});
profileImage.addEventListener("error",()=>{
imagePlaceholder.style.display="flex";
});
if(profileImage.complete){
imagePlaceholder.style.display=profileImage.naturalWidth>0?"none":"flex";
}
}

checkImage();

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{
if(window.scrollY>40){
header.style.background="rgba(5,5,5,.94)";
}else{
header.style.background="rgba(8,8,8,.82)";
}
});

const revealElements=document.querySelectorAll(
".section-heading,"+
".about-content,"+
".information-grid,"+
".skill-card,"+
".journey-item,"+
".contact-box"
);

revealElements.forEach(element=>{
element.classList.add("reveal");
});

const revealObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
revealObserver.unobserve(entry.target);
}
});
},{threshold:.12});

revealElements.forEach(element=>{
revealObserver.observe(element);
});

document.addEventListener("keydown",event=>{
if(event.key==="Escape"){
mobileMenu.classList.remove("open");
document.body.style.overflow="";
}
});

console.log("%c RAWHA.DEV ","color:#b7ff00;font-size:20px;font-weight:bold;");
console.log("Rawha Bin Shajahan - Front-End Web Developer");