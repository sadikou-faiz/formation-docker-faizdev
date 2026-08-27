# Exercice 07 — Dockeriser une application Node.js

## Objectif

Dockeriser l'application Node.js fournie et comprendre les étapes de build et d'exécution.

## Prérequis

Avoir suivi les exercices précédents.

## Contexte

Le dossier `app/` contient une petite application Express qui sert une page et une API.

## Démonstration

Lancer l'application sans Docker :

```bash
# Depuis le dossier app/
cd app
npm install
npm start
```

Arrêter l'application (Ctrl+C) puis construire l'image Docker :

```bash
# Depuis la racine du repository
docker build -t todo-app .
```

Démarrer un conteneur à partir de l'image :

```bash
docker run -d --name todo-local -p 3001:3000 todo-app
```

Vérifier dans le navigateur : `http://localhost:3001`.

## À vous de jouer

1) Installez les dépendances et lancez l'application localement :

```bash
cd app
npm install
npm start
```

2) Construisez l'image :

```bash
cd ..
docker build -t todo-app .
```

3) Lancez le conteneur :

```bash
docker run -d --name todo-local -p 3001:3000 todo-app
```

4) Vérifiez l'API :

```bash
curl http://localhost:3001/api/tasks
```

5) Arrêtez et supprimez le conteneur :

```bash
docker stop todo-local
docker rm todo-local
```

## Vérification

- L'application s'affiche et l'API retourne un tableau JSON.

## Exercice pratique

Modifiez `app/public/index.html` pour changer le titre, reconstruisez l'image et vérifiez la mise à jour.

```bash
# Reconstruire
docker build -t todo-app .
# Redémarrer le conteneur
docker stop todo-local
docker rm todo-local
docker run -d --name todo-local -p 3001:3000 todo-app
```

## Questions

- Pourquoi copier `package.json` avant le reste du code dans le Dockerfile ?

## Erreurs fréquentes

- Oublier d'exécuter `npm install` dans le conteneur lors de l'image.

## Ce que vous devez retenir

- Le Dockerfile permet d'automatiser la création d'une image exécutable.

## Pour aller plus loin

- Ajouter un `nodemon` pour le développement local (optionnel).

## Prochain exercice

Passez à [08-postgresql](../08-postgresql/README.md)
