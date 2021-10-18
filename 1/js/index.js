const rootElem = document.getElementById("root");

const menuListElem = document.querySelector(".main-menu-list");

menuListElem.addEventListener("click", (event) => {
  event.preventDefault();
  for (const child of menuListElem.children) {
    child.classList.remove("menu-click");
  }
  event.target.classList.add("menu-click");
});
