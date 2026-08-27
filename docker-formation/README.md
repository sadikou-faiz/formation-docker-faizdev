# Formation Docker pour débutants

## Public cible

Cette formation s'adresse aux développeurs débutants et personnes souhaitant comprendre Docker et conteneuriser une application Node.js.

## Objectifs

- Comprendre les concepts de Docker, images et conteneurs.
- Dockeriser une application Node.js.
- Utiliser Docker Compose et PostgreSQL.
- Déployer une application sur un serveur.

## Pré-requis

- Connaissances de base en ligne de commande.
- GitHub account si vous utilisez Codespaces.

## Utilisation avec GitHub Codespaces

Ce repository contient une configuration `.devcontainer` pour démarrer un Codespace. Il utilise Docker-in-Docker en tant que feature. Sur Codespaces, exposez les ports via l'interface pour accéder à l'application.

## Structure du repository

```
docker-formation/
│
├── README.md
├── .gitignore
├── .dockerignore
│
├── .devcontainer/
│   └── devcontainer.json
│
├── app/
│   ├── package.json
│   ├── server.js
│   └── public/
│       ├── index.html
│       └── style.css
│
├── Dockerfile
├── compose.yaml
├── .env.example
│
└── exercices/
    ├── 01-premier-conteneur/
    ├── 02-images-et-conteneurs/
    ├── 03-creer-une-image/
    ├── 04-exposer-une-application/
    ├── 05-volumes/
    ├── 06-docker-compose/
    ├── 07-application-node/
    ├── 08-postgresql/
    ├── 09-application-complete/
    └── 10-deploiement/
```

## Ordre recommandé des exercices

01 — Premier conteneur
02 — Images et conteneurs
03 — Créer une image
04 — Exposer une application
05 — Volumes
06 — Docker Compose
07 — Application Node.js
08 — PostgreSQL
09 — Application complète
10 — Déploiement

## Comment démarrer

1) Ouvrir le repository dans GitHub Codespaces ou localement.
2) Copier `.env.example` en `.env` et adapter si besoin :

```bash
cp .env.example .env
```

3) Démarrer la stack finale :

```bash
docker compose up -d --build
```

4) Accéder à l'application sur le port indiqué (3000 par défaut).

## Signaler un problème

Ouvrir une issue sur le repository GitHub avec un titre descriptif et les étapes pour reproduire.

## Remarques pédagogiques

Chaque exercice contient des sections "Démonstration" (le formateur montre) et "À vous de jouer" (l'élève reproduit). Toutes les commandes nécessaires se trouvent dans les README d'exercices.
