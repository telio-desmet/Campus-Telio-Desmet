# Campus-Telio-Desmet
Exercice campus

## Exercice n° 1.1 : rendre le stock explicite

4. Pourquoi if (process.argv[2]) se trompe-t-il avec lʼargument 0 ?

Lorsque l'on remplace le code initial de `stock.js` par le code suivant (conservé dans `json/test.js`) :

```js
if (process.argv[2]) {
  console.log(`${process.argv[2]} exemplaires disponibles`)
} else {
  console.log('Rupture de stock')
}
```

on obtient, en lançant le fichier depuis la racine :

```powershell
\Campus-Telio-Desmet> node json/test.js 0
0 exemplaires disponibles
```

(Le message `Cannot find module ...\test.js` observé avec `node test.js 0` venait d'un problème de chemin : le fichier est dans `json/`. Il n'est pas lié au comportement du `if`.)

Cela est dû au fait que `process.argv` contient des **chaînes de caractères**. Avec `node json/test.js 0`, `process.argv[2]` vaut `"0"` (la chaîne), et non le nombre `0`.

`Boolean("0") === true` mais `Boolean(0) === false`. Le piège vient du **type**, pas de la valeur.

À noter : sans argument, `process.argv[2]` vaut `undefined` et `Number(undefined)` donne `NaN`. Selon le comportement souhaité, on peut écrire `const stock = Number(process.argv[2] ?? 0)`.
