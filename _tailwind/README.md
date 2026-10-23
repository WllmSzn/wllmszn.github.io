# Feuille de style du site

`assets/site.css` est compilée depuis ce dossier. Après toute modification des classes dans
`index.html`, `portfolio.html`, `artefact.html` ou `designer-augmente.html`, recompiler depuis la racine du dépôt :

```bash
npx tailwindcss@3.4.17 -c _tailwind/tailwind.config.js -i _tailwind/input.css -o assets/site.css --minify
```

Le dossier commence par `_` : GitHub Pages (Jekyll) ne le publie pas.
