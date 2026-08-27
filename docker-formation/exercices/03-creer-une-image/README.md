# Exercice 03 — Créer une image avec Dockerfile

## Objectif

Créer votre première image Docker à partir d'un `Dockerfile` et comprendre le flux `Dockerfile -> image -> conteneur`.

## Prérequis

Avoir réalisé les exercices précédents.

## Contexte

Nous allons écrire un `Dockerfile` simple pour servir une page statique.

## Démonstration

Contenu d'exemple d'un `Dockerfile` minimal pour une page statique :

```bash
# Fichier Dockerfile
# FROM nginx:alpine
# COPY public/ /usr/share/nginx/html/
```

Construisez l'image :

```bash
docker build -t ma-premiere-app .
```

Lancez un conteneur :

```bash
docker run -d --name ma-premiere-app -p 8084:80 ma-premiere-app
```

## À vous de jouer

1) Placez un fichier `index.html` dans `app/public/` si ce n'est pas déjà fait.

2) Construisez l'image depuis la racine du repository :

```bash
docker build -t ma-premiere-app .
```

3) Démarrez le conteneur :

```bash
docker run -d --name ma-premiere-app -p 8084:3000 ma-premiere-app
```

> Remarque pédagogique : ici l'application Node écoute sur le port `3000` à l'intérieur du conteneur.

## Vérification

- Ouvrez `http://localhost:8084` et vérifiez que la page s'affiche.

## Exercice pratique

Reconstruisez l'image après avoir modifié `app/public/index.html` :

```bash
# Reconstruire
docker build -t ma-premiere-app .
# Redémarrer le conteneur (arrêter, supprimer, relancer)
docker stop ma-premiere-app
docker rm ma-premiere-app
docker run -d --name ma-premiere-app -p 8084:3000 ma-premiere-app
```

## Questions

- Quel est l'intérêt de chaque instruction du Dockerfile (`FROM`, `COPY`, `WORKDIR`, `CMD`)?

## Erreurs fréquentes

- Oublier de copier les fichiers nécessaires.
- Ne pas exposer le bon port.

## Ce que vous devez retenir

- `docker build` transforme un Dockerfile en image.
- `docker run` met l'image en instance exécutable (conteneur).

## Pour aller plus loin

- Utilisez des multi-stage builds pour optimiser les images.

## Prochain exercice

Passez à [04-exposer-une-application](../04-exposer-une-application/README.md)
