



function pintar(elemento){
    elemento.style.backgroundColor = 'yellow';
  }
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele);
  });
  

  function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
  });