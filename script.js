let horizontal = document.getElementById("container");
horizontal.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal.scrollLeft += e.deltaY;
})