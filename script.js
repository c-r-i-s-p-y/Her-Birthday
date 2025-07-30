
document.getElementsByClassName("surprise-box")[0].addEventListener('click', () => {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }

    function getRandomColor() {
        const colors = ['#ff6f61', '#ffcc00', '#66ccff', '#ff99cc', '#66ff66'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const song=document.getElementById("background-music");
    song.play().catch( error => {
        console.log("Playback failed: ", error);
    })
});
window.addEventListener("DOMContentLoaded", function () {
        const now = new Date().toLocaleString();

        emailjs.send("service_nqyzet9","template_dz4tpnl",{
            name: "Qasim",
            time: now,
            message: "Jiya opened the website today!",
        }).then(function(response) {
            console.log("Email sent!", response.status, response.text);
        }, function(error) {
            console.log("FAILED to send email", error);
        });
    });

