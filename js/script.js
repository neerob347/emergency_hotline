 let buttons = document.getElementsByClassName("heartBtn");
  let heartCounter = document.getElementById("heartCount");
  let count = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      count++;
      heartCounter.innerText = count;
   }
}
