// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

const listeNotes    = document.querySelector(".liste-notes");
const listeReussite = document.querySelector(".liste-reussite");
const spanMoyenne   = document.querySelector(".moyenne");
const spanMax       = document.querySelector(".max");
const spanMin       = document.querySelector(".min");

// =================================
// 🧠 2. Variables globales / état
// =================================

const eleves = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "Gabriel", "Hugo"];
const notes  = [14, 8, 17, 11, 6, 15, 12, 9];


// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

// ============================================
// 1. CONVERTIR LES NOTES EN POURCENTAGE AVEC .map()
// ============================================

const notesSurCent = notes.map(function(note) {
  return Math.round((note / 20) * 100);
});


// ============================================
// 2. CRÉER UN TABLEAU DE PHRASES AVEC .map()
// ============================================

const phrases = eleves.map(function(eleve, index) {
  return eleve + " a eu " + notes[index] + "/20 soit " + notesSurCent[index] + "%";
});

// ============================================
// 3. AFFICHER TOUTES LES NOTES DANS LE DOM
// ============================================

eleves.forEach(function(eleve, index) {
  const note        = notes[index];
  const pourcentage = notesSurCent[index];
  const li          = document.createElement("li");

  li.textContent = eleve + " : " + note + "/20  —  " + pourcentage + "%";
  li.classList.add(note >= 10 ? "reussite" : "echec");

  listeNotes.appendChild(li);
});

// ============================================
// 4. CALCULER LA MOYENNE
// ============================================

let total = 0;

for (let i = 0; i < notes.length; i++) {
  total += notes[i];
}

const moyenne = total / notes.length;
spanMoyenne.textContent = moyenne.toFixed(2) + "/20";


// ============================================
// 5. TROUVER LE MAX ET LE MIN
// ============================================

let max = notes[0];
let min = notes[0];

for (let i = 1; i < notes.length; i++) {
  if (notes[i] > max) {
    max = notes[i];
  }
  if (notes[i] < min) {
    min = notes[i];
  }
}

spanMax.textContent = max + "/20";
spanMin.textContent = min + "/20";


// ============================================
// 6. FILTRER LES ÉLÈVES AU-DESSUS DE LA MOYENNE
// ============================================

const elevesAuDessus = eleves.filter(function(eleve, index) {
  return notes[index] >= moyenne;
});

elevesAuDessus.forEach(function(eleve) {
  const li = document.createElement("li");
  li.textContent = eleve;
  li.classList.add("reussite");
  listeReussite.appendChild(li);
});

