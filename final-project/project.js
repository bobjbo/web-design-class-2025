function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}



function tryPlay() {
    setTimeout(tryPlay,5)
    playAudio()
}

function playAudio() {
    const audio = document.getElementById("audio");
    console.log("AAAAAAAAAAAAAAAAAA")
    audio.play();
}

tryPlay()
