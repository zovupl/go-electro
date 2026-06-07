# AutoSerwis Go Electro — strona www

Strona statyczna dla AutoSerwis Go Electro, Warszawa Okęcie.

## Deploy na GitHub Pages

### Pierwsze wdrożenie

```bash
# 1. Wejdź do folderu projektu
cd "D:\MAT LAPTOP\GO ELECTRO\STRONA"

# 2. Inicjalizuj git
git init
git branch -M main

# 3. Dodaj zdalne repozytorium (zamień go-electro na nazwę repo jeśli inna)
git remote add origin https://github.com/matsveidzmitryieu/go-electro.git

# 4. Dodaj pliki i zrób pierwszy commit
git add index.html css/ js/ assets/ README.md .gitignore
git commit -m "Initial: AutoSerwis Go Electro website"

# 5. Push
git push -u origin main
```

### Włącz GitHub Pages

W repozytorium na GitHub:
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Save

Strona będzie dostępna pod: `https://matsveidzmitryieu.github.io/go-electro/`

### Aktualizacja strony

```bash
git add -A
git commit -m "Update: opis zmian"
git push
```

Zmiany pojawią się na stronie po 1–2 minutach.
