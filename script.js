const etoiles = document.getElementById("etoiles");
const message = document.getElementById("message");
const texteMessage = document.getElementById("texteMessage");
const fermer = document.getElementById("fermer");


 // ========================================
 // ÉTOILES NORMALES
 // ========================================

const messages = [
    "Celle-là représente ton sourire ❤️",
    "Les plus belles étoiles sont celles que je vois dans tes yeux ✨",
    "Celle-là représente la première fois que je t'ai vue ❤️",
    "Pour la plus belle des étoiles ✨",
    "Pour la plus belle des fleurs 🌸",
    "Celle-ci me rappelle pourquoi je suis tombée amoureuse de toi ❤️",
    "Celle-là pour nos plus beaux souvenirs ✨"
];


const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg"
];


// Ces étoiles seront les étoiles à photos

const etoilesPhoto = [5, 17, 30];


for (let i = 0; i < 40; i++) {

    const etoile =
        document.createElement("div");


    etoile.classList.add("etoile");


    etoile.textContent = "✦";


    etoile.style.left =
        Math.random() * 100 + "%";


    etoile.style.top =
        Math.random() * 100 + "%";


    etoile.style.fontSize =
        Math.random() * 15 + 10 + "px";


    etoile.style.animationDuration =
        Math.random() * 2 + 1.5 + "s";


    etoile.style.animationDelay =
        Math.random() * 3 + "s";


    // ==================================
    // ÉTOILE QUI CACHE UNE PHOTO
    // ==================================

    if (etoilesPhoto.includes(i)) {

        etoile.classList.add("etoile-photo");

    }


    etoile.addEventListener(
        "click",
        function() {

            // Si c'est une étoile photo

            if (etoilesPhoto.includes(i)) {

                const numeroPhoto =
                    etoilesPhoto.indexOf(i);


                texteMessage.innerHTML = `
                    <img
                        src="${photos[numeroPhoto]}"
                        class="photo-message"
                    >
                `;


                message.style.display =
                    "block";


                return;

            }


            // Sinon : message normal

            const hasard =
                Math.floor(
                    Math.random() * messages.length
                );


            texteMessage.textContent =
                messages[hasard];


            message.style.display =
                "block";

        }
    );


    etoiles.appendChild(etoile);

}

fermer.addEventListener("click", function() {

    message.style.display = "none";

});


// ========================================
// TRAÎNÉE DE POUSSIÈRE D'ÉTOILES
// ========================================

document.addEventListener("pointermove", function(e) {

    if (
        e.pointerType === "touch" ||
        e.pointerType === "mouse"
    ) {

        for (let i = 0; i < 5; i++) {

            const poussiere =
                document.createElement("div");

            poussiere.classList.add("poussiere");

            poussiere.textContent = "✦";

            poussiere.style.left =
                e.clientX + "px";

            poussiere.style.top =
                e.clientY + "px";


            const directionX =
                (Math.random() - 0.5) * 80;

            const directionY =
                (Math.random() - 0.5) * 80;


            poussiere.style.setProperty(
                "--x",
                directionX + "px"
            );

            poussiere.style.setProperty(
                "--y",
                directionY + "px"
            );


            poussiere.style.fontSize =
                Math.random() * 8 + 5 + "px";


            document.body.appendChild(poussiere);


            setTimeout(function() {

                poussiere.remove();

            }, 1200);

        }

    }

});


// ========================================
// ÉTOILES FILANTES
// ========================================

const voeux = [
    "Fais un vœu... ✨",
    "Un vœu pour toi, parce que tu mérites les plus belles choses ✨"
];


function creerEtoileFilante() {

    const etoileFilante =
        document.createElement("div");

    etoileFilante.classList.add(
        "etoile-filante"
    );

    etoileFilante.textContent = "✦";


    etoileFilante.style.left =
        Math.random() * 70 + "%";

    etoileFilante.style.top =
        Math.random() * 40 + "%";


    etoileFilante.addEventListener(
        "click",
        function() {

            const hasard =
                Math.floor(
                    Math.random() * voeux.length
                );

            texteMessage.textContent =
                voeux[hasard];

            message.style.display =
                "block";

            etoileFilante.remove();

        }
    );


    document.body.appendChild(
        etoileFilante
    );


    setTimeout(function() {

        etoileFilante.remove();


        // On attend entre 5 et 12 secondes
        // avant la prochaine étoile

        const attente =
            Math.random() * 7000 + 5000;


        setTimeout(
            creerEtoileFilante,
            attente
        );

    }, 2000);

}


// Première étoile après 5 secondes

setTimeout(
    creerEtoileFilante,
    5000
);


// ========================================
// ÉTOILES SPÉCIALES
// ========================================

const positionsSpeciales = [

    {
        gauche: 20,
        haut: 25
    },

    {
        gauche: 75,
        haut: 25
    },

    {
        gauche: 35,
        haut: 50
    },

    {
        gauche: 65,
        haut: 50
    },

    {
        gauche: 50,
        haut: 75
    }

];


const etoilesSpeciales = [];


positionsSpeciales.forEach(
    function(position, index) {

        const etoileSpeciale =
            document.createElement("div");


        etoileSpeciale.classList.add(
            "etoile-speciale"
        );


        etoileSpeciale.textContent =
            "✦";


        etoileSpeciale.style.left =
            position.gauche + "%";


        etoileSpeciale.style.top =
            position.haut + "%";


        etoileSpeciale.addEventListener(
            "click",
            function() {

                // Empêche de trouver
                // la même étoile plusieurs fois

                if (
                    etoileSpeciale.dataset.trouvee
                    === "oui"
                ) {

                    return;

                }


                etoileSpeciale.dataset.trouvee =
                    "oui";


                // L'étoile devient rouge

                etoileSpeciale.style.color =
                    "#ff4f8b";


                // On compte les étoiles trouvées

                const trouvees =
                    etoilesSpeciales.filter(
                        function(etoile) {

                            return (
                                etoile.dataset.trouvee
                                === "oui"
                            );

                        }
                    );


                // Message de découverte

                texteMessage.textContent =
                    "Tu as trouvé une étoile secrète... ❤️";


                message.style.display =
                    "block";


                // ==================================
                // 5 ÉTOILES TROUVÉES
                // ==================================

                if (trouvees.length === 5) {

                    // On ferme le petit message

                    message.style.display =
                        "none";


                    // On affiche le cœur

                    creerCoeur();

                }

            }
        );


        etoiles.appendChild(
            etoileSpeciale
        );


        etoilesSpeciales.push(
            etoileSpeciale
        );

    }
);


// ========================================
// CRÉER UNE LIGNE ENTRE DEUX ÉTOILES
// ========================================

function creerLigne(index1, index2) {

    const etoile1 =
        etoilesSpeciales[index1];

    const etoile2 =
        etoilesSpeciales[index2];


    const x1 =
        etoile1.offsetLeft + 10;

    const y1 =
        etoile1.offsetTop + 10;


    const x2 =
        etoile2.offsetLeft + 10;

    const y2 =
        etoile2.offsetTop + 10;


    const dx =
        x2 - x1;

    const dy =
        y2 - y1;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(
            dy,
            dx
        ) * 180 / Math.PI;


    const ligne =
        document.createElement("div");


    ligne.classList.add(
        "ligne-constellation"
    );


    ligne.style.left =
        x1 + "px";


    ligne.style.top =
        y1 + "px";


    ligne.style.width =
        distance + "px";


    ligne.style.transform =
        "rotate(" + angle + "deg)";


    etoiles.appendChild(
        ligne
    );

}

// ========================================
// CONSTELLATION EN FORME DE COEUR
// ========================================

const pointsCoeur = [
    // Creux central
    { gauche: 50, haut: 35 },

    // Lobe gauche
    { gauche: 47, haut: 31 },
    { gauche: 44, haut: 28 },
    { gauche: 41, haut: 27 },
    { gauche: 38, haut: 27 },
    { gauche: 35, haut: 29 },
    { gauche: 33, haut: 32 },
    { gauche: 31, haut: 36 },
    { gauche: 30, haut: 40 },
    { gauche: 30, haut: 44 },

    // Côté gauche
    { gauche: 31, haut: 48 },
    { gauche: 33, haut: 52 },
    { gauche: 35, haut: 56 },
    { gauche: 38, haut: 60 },
    { gauche: 41, haut: 64 },
    { gauche: 44, haut: 68 },
    { gauche: 47, haut: 72 },
    { gauche: 50, haut: 78 },

    // Côté droit
    { gauche: 53, haut: 72 },
    { gauche: 56, haut: 68 },
    { gauche: 59, haut: 64 },
    { gauche: 62, haut: 60 },
    { gauche: 65, haut: 56 },
    { gauche: 67, haut: 52 },
    { gauche: 69, haut: 48 },
    { gauche: 70, haut: 44 },
    { gauche: 70, haut: 40 },
    { gauche: 69, haut: 36 },
    { gauche: 67, haut: 32 },
    { gauche: 65, haut: 29 },
    { gauche: 62, haut: 27 },
    { gauche: 59, haut: 27 },
    { gauche: 56, haut: 28 },
    { gauche: 53, haut: 31 }
];


function creerCoeur() {

    const coeur =
        document.createElement("div");

    coeur.classList.add("coeur-animation");


    pointsCoeur.forEach(
        function(point, index) {

            const etoile =
                document.createElement("div");

            etoile.classList.add(
                "point-coeur"
            );

            etoile.textContent =
                "✦";

            etoile.style.left =
                point.gauche + "%";

            etoile.style.top =
                point.haut + "%";

            etoile.style.animationDelay =
                index * 0.08 + "s";

            coeur.appendChild(
                etoile
            );

        }
    );


    // Bouton pour fermer après l'animation

    const fermerCoeur =
        document.createElement("button");

    fermerCoeur.classList.add(
        "fermer-coeur"
    );

    fermerCoeur.textContent =
        "×";


    fermerCoeur.addEventListener(
        "click",
        function() {

            coeur.remove();

        }
    );


    coeur.appendChild(
        fermerCoeur
    );


    document.querySelector(".ciel").appendChild(
        coeur
    );

}

// ========================================
// INTERACTION AVEC LA LUNE
// ========================================

const lune = document.querySelector(".lune");

lune.addEventListener("click", function() {

    texteMessage.textContent = `(6 septembre 2024-Resto Le Red) "A toi mon Amour,

C'est dans tes yeux que je vois mon plus beau reflet,
C'est dans tes bras que je me sens à la maison.
Je t'ai toujours cherchée dans mes rêves, sans savoir qui tu étais,
Et je t'ai trouvée dans ma vie, comme une évidence rêvée.
Si tu pouvais voir dans mon âme, tu comprendrais
À quel point tu comptes spécialement pour moi,
À quel point tu es mon âme sœur."`;

    message.style.display = "block";

});

