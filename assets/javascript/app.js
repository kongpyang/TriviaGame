
  //Get this window code from google online//

window.onload = function() {
    formEl.style.display = 'none';
  };
  const formEl = document.querySelector("#formEl");
  const start = document.querySelector("#start");
  start.addEventListener("click", function(){
    start.style.display = "none";
    formEl.style.display = "block";
     onTimer();
  });
   //Timer. Do 'i' for 30 seconds and run function. Note: go back to old notes for code//
  i = 30;
  function onTimer(){
    document.querySelector("#time").innerHTML = "<h3>You have " + i + " seconds to complete.</h3>";
    i--;

   // create an if statement. Note: go back to java notes//

    if(i < 0) {
        document.querySelector("#time").innerHTML = "<h3>You have run out of time!</h3";
        formEl.style.display = 'none';
    }else {
        setTimeout(onTimer, 1000);
    }
  }
  //run funcrion for questions//
  function questions() {
    let total = 4;
    let score = 0;

    // Set questions up here//
    let q1 = document.forms["manny"]["knockouts"].value;
    let q2 = document.forms["manny"]["professional"].value;
    let q3 = document.forms["manny"]["champion"].value;
    let q4 = document.forms["manny"]["rankings"].value;
    
    //do a let document because results can change"
    let result = document.querySelector("#result");

    //Need to create a loop for answers loop//
    let answers = ["c", "c", "a", "a"];
    for(let i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i-1]) {
            score++;
        } 
    }
    // get results  here//
    result.textContent = "You scored " + score +  " out of " + total + ".";
    document.querySelector("#time").style.display = "none";
    formEl.style.display = 'none';
    return false;
  }
  
  








