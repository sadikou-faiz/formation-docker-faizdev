# Exercice 02 — Dockeriser le frontend et le backend

## Objectif

Construire et exécuter séparément les images Docker du frontend (React) et du backend (FastAPI) du projet.

## Prérequis

Avoir réalisé l'exercice 01.

## Contexte

Le projet est composé de deux applications indépendantes, chacune avec son propre `Dockerfile` :

- `backend/` : une API FastAPI avec une seule route, `/api/message`.
- `frontend/` : une application React (Vite) qui appelle cette route et affiche la réponse.

## Démonstration

1) Placez-vous dans le dossier du backend, construisez l'image et démarrez le conteneur :

```bash
cd backend
docker build -t backend .
docker run -d --name mon_backend -p 8000:8000 backend
cd ..
```

2) Vérifiez l'API :

```bash
curl http://localhost:8000/api/message
```

3) Placez-vous dans le dossier du frontend, construisez l'image et démarrez le conteneur :

```bash
cd frontend
docker build -t frontend .
docker run -d --name mon_frontend -p 8080:80 frontend
cd ..
```

4) Ouvrez `http://localhost:8080` et cliquez sur le bouton "Appeler le backend". Le message renvoyé par l'API doit s'afficher.

5) Nettoyez :

```bash
docker stop mon_frontend mon_backend
docker rm mon_frontend mon_backend
```

Passez à [03-docker-compose](../03-docker-compose/README.md)
