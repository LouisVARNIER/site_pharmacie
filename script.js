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
    container.innerHTML = ""; // Nettoyer avant d’ajouter
    produits.forEach((p, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        if (index === 0) card.classList.add('active'); // première visible

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
