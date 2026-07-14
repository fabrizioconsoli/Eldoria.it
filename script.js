let playing = false;


// =======================
// APERTURA CODEX
// =======================

function openCodex(){

    document.getElementById("cover").style.display = "none";

    document.getElementById("codex").style.display = "block";

    page("home");


    // Avvio musica dopo interazione utente
    let music = document.getElementById("music");

    music.volume = 0.35;

    music.play()
    .then(() => {

        playing = true;

    })
    .catch(() => {

        console.log("Il browser ha bloccato l'audio automatico.");

    });

}



// =======================
// CAMBIO PAGINA
// =======================

function page(id){

    document.querySelectorAll(".paper")
    .forEach(section => {

        section.style.display = "none";

    });


    let selected = document.getElementById(id);


    if(selected){

        selected.style.display = "block";

    }

}



// =======================
// TEMA CHIARO / SCURO
// =======================

function toggleTheme(){

    document.body.classList.toggle("light");

}



// =======================
// MUSICA
// =======================

function toggleMusic(){

    let music = document.getElementById("music");


    if(playing){

        music.pause();

        playing = false;

    }

    else{

        music.play();

        playing = true;

    }

}





// =======================
// PARTICELLE STELLARI
// =======================


const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");



function resizeCanvas(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);



let stars = [];



function createStars(){


    stars = [];


    for(let i = 0; i < 180; i++){


        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 2 + 0.3,

            speed: Math.random() * 0.5 + 0.1,

            opacity: Math.random()

        });


    }

}



createStars();





function animateStars(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    stars.forEach(star => {


        ctx.beginPath();


        ctx.fillStyle =
        `rgba(255,255,255,${star.opacity})`;



        ctx.arc(

            star.x,

            star.y,

            star.size,

            0,

            Math.PI * 2

        );



        ctx.fill();



        star.y -= star.speed;



        if(star.y < 0){

            star.y = canvas.height;

            star.x = Math.random() * canvas.width;

        }


    });



    requestAnimationFrame(animateStars);


}



animateStars();