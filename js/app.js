// Define Global Variables

const sections = document.querySelectorAll("section");
const section = document.querySelector("landing__container");
const navList = document.getElementById("navbar__list");



// build the nav and scroll to sections from the navBar
for (let sectionsCounter = 0; sectionsCounter < sections.length; sectionsCounter++) {
  const createItem = document.createElement("li");

  const createItemId = sections[sectionsCounter].getAttribute("id");
  const createItemName = sections[sectionsCounter].getAttribute('data-nav');


  if (sectionsCounter == 0) {
    createItem.innerHTML =
      `<li class='navbar__menu'>
    <a href="#${createItemId}">${createItemName}</a>
    </li>
    `;
  }

  else {
    createItem.innerHTML =
      `<li class='navbar__menu '>
        <a href="#${createItemId}">${createItemName}</a>
        </li>`;
  }
  navList.appendChild(createItem);
}







// Add class 'active' to section when near top of viewport

/*
window.addEventListener("scroll" ,() => {
  const scrolled = section.getBoundingClientRect();
  
  sections.forEach(current => {


    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop + 50;


   if (scrolled > sectionTop && scrolled < sectionTop + sectionHeight)
    {
      document.querySelector(".navbar__menu ").classList.add("active");
    } 
    else 
    {
      document.querySelector(".navbar__menu ").classList.remove("active");
    }
  });
});
*/


document.addEventListener('scroll', () => {
    var current = sections.length;
    const navLi = document.querySelectorAll("nav ul li a");

    while (--current && window.scrollY + 150 < sections[current].offsetTop) 
    {
      navLi.forEach((li) => li.classList.remove("active"));
    }

    navLi[current].classList.add("active");
    
  });






// Add class 'your-active-class' to section when near top of viewport
window.onscroll = () => {
  sections.forEach(function (scrolled) {
    if (scrolled.getBoundingClientRect().top >= 0 && scrolled.getBoundingClientRect().top <= 200) {
      scrolled.classList.add("your-active-class");
    }
    else {
      scrolled.classList.remove("your-active-class");
    }
  });

}





// Scroll behavior: 'smooth'
const navA = document.querySelectorAll("nav li a");

navA.forEach((navAClick) => {
  navAClick.addEventListener("click", (index) => {
    index.preventDefault();
    const sectionId = index.target.attributes.href.value;
    const navLinkId = document.querySelector(sectionId);
    navLinkId.scrollIntoView({
      behavior: "smooth",
    });
    //navLinkId.forEach((li) => li.classList.add('active'));
  });
});



