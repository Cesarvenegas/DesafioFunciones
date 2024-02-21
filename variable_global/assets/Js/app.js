  var currentColor = '';

  
  function changeColor(color) {
    document.getElementById('key').style.backgroundColor = color;
  }


  function createNewDiv(color) {
    var newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
  }

  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
      currentColor = 'pink'; 
    } else if (event.key === 's') {
      currentColor = 'orange'; 
    } else if (event.key === 'd') {
      currentColor = 'lightblue'; 
    } else if (event.key === 'q') {
      createNewDiv('purple'); 
    } else if (event.key === 'w') {
      createNewDiv('gray'); 
    } else if (event.key === 'e') {
      createNewDiv('brown'); 
    }
    if (currentColor !== '') {
      changeColor(currentColor);
    }
  });
