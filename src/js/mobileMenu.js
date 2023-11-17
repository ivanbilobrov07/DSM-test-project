import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const burgerBtnRef = document.querySelector(".burger-menu-btn");
const backdropRef = document.querySelector(".backdrop");
const closeButtonRef = document.querySelector(".mobile-menu__btn");

const windowKeydownHandler = (event) => {
  if (event.code === "Escape") {
    closeMobileMenu();
  }
};

const openMobileMenu = () => {
  backdropRef.classList.remove("hidden");

  window.addEventListener("keydown", windowKeydownHandler);
  disableBodyScroll(document.body);
};

const closeMobileMenu = () => {
  backdropRef.classList.add("hidden");

  window.removeEventListener("keydown", windowKeydownHandler);
  enableBodyScroll(document.body);
};

const onBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeMobileMenu();
  }
};

burgerBtnRef.addEventListener("click", openMobileMenu);
backdropRef.addEventListener("click", onBackdropClick);
closeButtonRef.addEventListener("click", closeMobileMenu);

window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
  if (!event.matches) return;
  closeMobileMenu();
});
