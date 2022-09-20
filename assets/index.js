/*=============== SHOW MENU ===============*/


const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')
 

/*=============== MENU show ===============*/


if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
/*=============== MENU hidden===============*/


if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// /*=============== remove menu mobile ===============*/


const navlink = document.querySelectorAll('.nav__link')

 const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
  
    navMenu.classList.remove("show-menu")
 }

 navlink.forEach(n => n.addEventListener('click',linkAction))





const scrollHeader = () =>{

    const header = document.getElementById('header')
 this.scrollY >= 50 ? header.classList.add('header-backg')
                    : header.classList.remove('header-backg')


}
window.addEventListener('scroll' , scrollHeader)



    


// const sections = document.querySelectorAll("[data-section]");

// const scrollreaveal = function () {

//     for (let i=0;i < sections.length; i++){
//         if(sections[i].getBoundingClientRect().top < window.innerHeight /1.5){

//             sections[i].classList.add("active");
//         }else{
//             sections[i].classList.remove("active");

//         }
//     }
// }
// scrollreaveal();

// addEventonElem(window,"scroll", scrollreaveal);
