let sec = 0;
let min = 0;
let hour = 0;
const startButton = document.getElementById('startB');


let interval
function start() {
    //chamada da funçao counter a cada 1 segundo (1000 milissegundos)
   interval = setInterval(counter, 1000);
   startButton.disabled = true;
}

function stop() {
    clearInterval(interval);
    startButton.disabled = false;

}

function reset() {
    clearInterval(interval);
    sec = 0;
    min = 0; 
    hour = 0;
    document.getElementById('timer').innerHTML= '00:00:00';
    startButton.disabled = false;

}

function counter() {
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if (min == 60){
            hour++;
            sec = 0;
            min = 0;
        }
    }  
    document.getElementById('timer').innerHTML= hour + ":" + min + ":" + sec;
}

