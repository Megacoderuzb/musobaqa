const navItems = {
  kurslar: "Kurslar",
  blog: "Blog",
  malumotlar: {
    title: "Malumotlar",
    items: ["Blog", "FAQ", "Ommaviy ofetra"],
  },
  ommabopKurslar: {
    title: "Ommabop Kurslar",
    items: ["Dasturlash foundation", ".NET mutaxassislik kursi"],
  },
  bizningLoyihalar: {
    title: "Bizning loyihalar",
    items: ["Osmondagi bolalar", "0 dan 1 gacha", "Abutech", "Alohida mavzu"],
  },
};


let navUl = document.querySelector(".nav-ul");
let mobileMenu = document.querySelector(".menu-mobile");
navUl.innerHTML = `
<ul>
<li><a href="./pages/kurslar.html">${navItems.kurslar}</a></li>
    <li><a href="./pages/blog.html">${navItems.blog}</a></li>
          <li>
            <button class="navbtn"><a href="#">Kirish</a></button>
          </li>
          <li><i class="fa-solid fa-moon"></i>
          </li></ul>
`;
// mobileMenu.innerHTML = `
// <a><li href="./pages/kurslar.html">${navItems.kurslar}</li></a>
//     <a><li href="./pages/blog.html">${navItems.blog}</li></a>
//           <li>
//           ${navItems.malumotlar.title}
//           </li>
//           <span class="info-items">
//           ${navItems.malumotlar.items.map((e) => {
//             return `<a href="#">${e}</a>`;
//           })}
//           </span>
//           </a>
// `;
var burger = document.querySelector(".burger");
var navbarMenu = document.querySelector(".navbar-menu");

burger.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
});

navbarMenu.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    navbarMenu.classList.remove("active");
  }
});
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});
