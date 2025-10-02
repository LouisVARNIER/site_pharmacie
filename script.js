const produits = [
    {
        image: "images/produit1.jpg",
        titre: "Doliprane",
        description: "Pour contrer tout types de douleurs."
    },
    {
        image: "images/produit2.png",
        titre: "Pranarom",
        description: "Notre vaste gamme de produits et huiles essentiels à base de plantes."
    },
    {
        image: "images/produit3.png",
        titre: "Nutergia",
        description: "Notre gamme axée spécialement sur l'alimentation de chacun."
    }
];

const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function genererCartes() {
    container.innerHTML = "";
    produits.forEach((p, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        if (index === 0) card.classList.add('active');

        card.innerHTML = `
      <img src="${p.image}" alt="${p.titre}">
      <h2>${p.titre}</h2>
      <p>${p.description}</p>
    `;
        container.appendChild(card);
    });
}

function showCard(index) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

function harmoniserLargeurCartesServices() {
    const cartes = document.querySelectorAll('.services-list li');
    let largeurMax = 0;

    // Trouver la carte la plus large
    cartes.forEach(card => {
        card.style.width = 'auto';
        const largeur = card.offsetWidth;
        if (largeur > largeurMax) largeurMax = largeur;
    });

    // Appliquer la largeur maximale à toutes les cartes
    cartes.forEach(card => {
        card.style.width = `${largeurMax}px`;
    });
}

window.addEventListener('load', harmoniserLargeurCartesServices);
window.addEventListener('resize', harmoniserLargeurCartesServices);


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + produits.length) % produits.length;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % produits.length;
    showCard(currentIndex);
});

genererCartes();
showCard(currentIndex);
