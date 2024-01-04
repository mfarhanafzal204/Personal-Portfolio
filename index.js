document.addEventListener("DOMContentLoaded", function () {
    // Custom cursor
    const cursor1 = document.querySelector(".cursor-1");
    const cursor2 = document.querySelector(".cursor-2");
  
    document.addEventListener("mousemove", (e) => {
      cursor1.style.top = e.pageY + "px";
      cursor1.style.left = e.pageX + "px";
      cursor2.style.top = e.pageY + "px";
      cursor2.style.left = e.pageX + "px";
    });
  
    document.addEventListener("mouseover", () => {
      cursor1.classList.add("active");
      cursor2.classList.add("active");
    });
  
    document.addEventListener("mouseout", () => {
      cursor1.classList.remove("active");
      cursor2.classList.remove("active");
    });
  
    // Mobile menu toggle
    const menuBars = document.getElementById("menu-bars");
    const header = document.querySelector("header");
  
    menuBars.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });
  