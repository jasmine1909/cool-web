let navToggler = document.querySelector(".navbar-toggler");
let navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("showNav");
});

let filterBtns = document.querySelectorAll(".btns-group button");
let filterImgs = document.querySelectorAll(".imgs-group div");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeFilterBtn();
    btn.classList.add("active-btn");
    let filterID = btn.id;

    filterImgs.forEach((img) => {
      if (img.classList.contains(filterID)) {
        img.style.display = "block";
        window.setTimeout(() => {
          img.style.opacity = "1";
          img.style.transform = "scale(1)";
        }, 0);
      } else {
        img.style.opacity = "0";
        img.style.transform = "scale(0)";
        window.setTimeout(() => {
          img.style.display = "none";
        }, 0);
      }
    });
  });
});

function changeFilterBtn() {
  filterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

///switch

const toggleSwitch = document.querySelector(".toggle-switch");
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.querySelector(".pricing-main").classList.add("active");
  } else {
    document.querySelector(".pricing-main").classList.remove("active");
  }
});
//function get rid of preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finnish");
});
