const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.location);

    if (key === code[index]) {
      index++;
//      console.log(e.which);
//      console.log(e.location);
//      console.log(e.detail);
      if (index === code.length) {
        alert('Congrats! You cracked the code!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
