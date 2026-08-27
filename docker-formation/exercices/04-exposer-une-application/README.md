# Exercice 04 — Exposer une application

## Objectif

Comprendre les ports, le mappage hôte:conteneur et comment accéder à une application depuis Codespaces.

## Prérequis

Avoir construit et lancé une application depuis l'exercice précédent.

## Contexte

Nous allons exposer l'application sur un port different du port interne.

## Démonstration

Lancer une application en mappant le port :

```bash
docker run -d -p 8085:3000 --name app-expose ma-premiere-app
```

Explication : `8085:3000` signifie `hôte:conteneur`.

## À vous de jouer

1) Lancez l'image construite précédemment :

```bash
docker run -d --name app-expose -p 8085:3000 ma-premiere-app
```

2) Vérifiez avec :

```bash
docker ps
```

3) Ouvrez `http://localhost:8085` (ou utilisez la fonctionnalité d'exposition de port de Codespaces).

4) Arrêtez et supprimez le conteneur :

```bash
docker stop app-expose
docker rm app-expose
```

## Vérification

- La page doit être accessible sur le port choisi.

## Exercice pratique

Relancez l'application sur le port 9090 :

```bash
docker run -d --name app-expose-9090 -p 9090:3000 ma-premiere-app
```

## Questions

- Quelle est la différence entre `EXPOSE` dans un Dockerfile et `-p` à l'exécution ?

## Erreurs fréquentes

- Oublier que Codespaces nécessite l'ouverture du port via l'interface si vous n'utilisez pas le mappage local.

## Ce que vous devez retenir

- Le mappage `-p hote:conteneur` rend un port conteneur accessible depuis l'extérieur.

## Pour aller plus loin

- Tester avec un reverse proxy local comme Traefik (option avancée).

## Prochain exercice

Passez à [05-volumes](../05-volumes/README.md)
