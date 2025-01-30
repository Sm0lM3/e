let button = document.getElementById('play');
let mins = 0;
let secs = 0;
let milisecs = 0;
let Play = false;
let Score = 0;
let counter = 0;

button.addEventListener('click', function () {
    Play = true;
    TimeCounterAndScoring();
});
/*This function computes for and displays the time alive and the score*/
  function TimeCounterAndScoring() {
      if (Play) {
          milisecs++;
          if (milisecs == 100) {
              secs++;
              milisecs = 0;
            /*This part below adds 100 to the score every 1 minute*/
              counter=counter+1
            if (counter == 60) {
              Score = Score + 100;
              counter = 0;
            }
          }
          if (secs == 60) {
              mins++;
              secs = 0;
          }
          /*These parts below displays the time alive and the score*/
          let mins2 = mins;
          let secs2 = secs;
          let milisecs2 = milisecs;
          if (mins < 10) {
              mins2 = "0" + mins2;
          }
          if (secs < 10) {
              secs2 = "0" + secs2;
          }
          if (milisecs < 10) {
              milisecs2 = "0" + milisecs2;
          }
          
          let Score2 = Score + "";
          document.getElementById('min').innerHTML = mins2;
          document.getElementById('sec').innerHTML = secs2;
          document.getElementById('score').innerHTML = Score2;
          setTimeout(TimeCounterAndScoring, 10);
      }
  }