let scroll_speed = 0;
let i = 0;

const before_loading =  document.getElementById("content-before-loading");

document.getElementById('input_file').addEventListener('change', function () {

    let fr = new FileReader();
    fr.onload = function () {
        document.getElementById('output')
            .textContent = fr.result;
    }

    fr.readAsText(this.files[0]);
})

function scrollWin(x, y) {
    window.scrollBy(x, y);
  }

function setSpeed0() {
    scroll_speed = 0;
  }

function setSpeed1() {
    scroll_speed = 1;
  }

  function setSpeed2() {
      scroll_speed = 2;
    }

  function setSpeed5() {
      scroll_speed = 5;
  }

function setSpeed10() {
    scroll_speed = 10;
}

function setSpeed25() {
    scroll_speed = 25;
}

function setSpeed40() {
    scroll_speed = 40;
}

//code lifted from https://www.geeksforgeeks.org/how-to-read-a-local-text-file-using-javascript/



  (function(){
    
    window.scrollBy(0, scroll_speed);
    setTimeout(arguments.callee, 250);
})();