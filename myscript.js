function changeEverything(){
    
    var heading = document.querySelector('#heading');
    heading.innerHTML = "Jebaited <br> (-1000 Aura)";
    heading.style.color = "red";

    var par = document.querySelector('#body-text');
    par.innerHTML = "00:30";
    par.style.color = "red";

    var img = document.querySelector('#rat-pic');
    img.src = "./assets/images/videoplayback.gif";

    let startingSeconds = 30;
    setInterval(countDown, 1000);

    function countDown(){
        
        let seconds = startingSeconds;

        par.innerHTML = '00:'+seconds;
        startingSeconds--;
    }

    let audio = new Audio("./ratsongg.mp3");
    audio.loop = "loop";
    audio.play()

    var btn = document.querySelector("#thumbs");
    btn.src = "./assets/x.png";
    btn.onclick = stopEvent;
    function stopEvent(){
        window.location.reload();
    }
}