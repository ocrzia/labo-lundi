# 📊 Briefing — Les notes de la classe

---

## 🎯 Objectif

Tu vas créer une petite application qui affiche les notes d'une classe, calcule des statistiques et met en valeur les résultats. Tout se passe dans le navigateur, sans rechargement de page.

---

## 📁 Structure des fichiers

```
projet-notes/
├── index.html
├── style.css
└── script.js
```

---

## 🧱 Ce qui est déjà fourni

- Le fichier **HTML** est complet, tu n'as pas à le modifier
- Le fichier **CSS** est complet, tu n'as pas à le modifier
- Le fichier **script.js** contient :
  - Les données de départ (élèves + notes)
  - La récupération des éléments du DOM
  - Des commentaires qui guident chaque étape

**Ton travail = compléter uniquement le fichier `script.js`**

---

## 📦 Les données de départ

Tu disposeras de deux tableaux déjà déclarés :

```javascript
const eleves = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "Gabriel", "Hugo"];
const notes  = [14, 8, 17, 11, 6, 15, 12, 9];
```

> ⚠️ Les deux tableaux sont **liés par leur index** : `eleves[0]` correspond à `notes[0]`, etc.

---

## 📋 Ce que tu dois faire — étape par étape

### Étape 1 — Convertir les notes en pourcentage

Utilise **`.map()`** pour transformer chaque note `/20` en pourcentage `/100`.

```
14/20  →  70%
8/20   →  40%
```

> 💡 Pense à arrondir le résultat avec `Math.round()`

---

### Étape 2 — Créer des phrases avec `.map()`

Utilise **`.map()`** sur le tableau `eleves` pour générer un tableau de phrases du type :

```
"Alice a eu 14/20 soit 70%"
"Bob a eu 8/20 soit 40%"
```

> 💡 Tu as accès à l'index dans `.map()` pour aller chercher la note correspondante

---

### Étape 3 — Afficher les notes dans le DOM

Utilise **`forEach()`** pour parcourir les élèves et pour chacun :

- Créer un élément `<li>`
- Y écrire le nom, la note et le pourcentage
- Lui ajouter la classe `reussite` si note ≥ 10, `echec` sinon
- L'injecter dans la liste `#liste-notes`

```
✅ Alice : 14/20 — 70%      (fond vert)
❌ Bob : 8/20 — 40%         (fond rouge)
```

---

### Étape 4 — Calculer la moyenne

Utilise une **boucle `for`** pour additionner toutes les notes, puis divise par le nombre d'élèves.

Affiche le résultat dans le `<span id="moyenne">` avec **deux décimales**.

```
Moyenne de la classe : 10.25
```

---

### Étape 5 — Trouver le max et le min

Utilise une **boucle `for`** pour parcourir les notes et trouver :

- La note la plus haute → `<span id="max">`
- La note la plus basse → `<span id="min">`

```
Note la plus haute : 17
Note la plus basse : 6
```

> 💡 Commence avec `max = notes[0]` et `min = notes[0]` avant la boucle

---

### Étape 6 — Filtrer les élèves au-dessus de la moyenne

Utilise **`.filter()`** pour ne garder que les élèves dont la note est supérieure ou égale à la moyenne, puis affiche-les dans `#liste-reussite` avec un `forEach()`.

```
Alice, Charlie, Fiona, Gabriel
```

---

## 🧠 Notions travaillées

| Notion | Où ? |
|---|---|
| `Array` | Les tableaux `eleves` et `notes` |
| `for` | Étapes 4 et 5 |
| `forEach()` | Étapes 3 et 6 |
| `.map()` | Étapes 1 et 2 |
| `.filter()` | Étape 6 |
| Injection DOM | Étapes 3 et 6 |
| Récupération DOM | `getElementById` en début de fichier |
| Moyenne | Étape 4 |
| Maximum | Étape 5 |
| Minimum | Étape 5 |

---

## ✅ Résultat attendu

- Une liste de toutes les notes, colorées en vert ou rouge
- Un bloc de statistiques avec moyenne, max et min
- Une liste des élèves ayant réussi

---

## 💬 Conseils

- Travaille **étape par étape**, dans l'ordre
- Utilise **`console.log()`** après chaque étape pour vérifier que ça fonctionne
- Si quelque chose ne s'affiche pas, commence par vérifier que tu as bien récupéré le bon élément du DOM

**Bonne chance ! 💪**
