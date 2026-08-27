# Exercice 09 — Application complète

## Objectif

Assembler toutes les notions : application Node.js + PostgreSQL + Docker Compose.

## Objectifs pédagogiques

- Lancer l'application complète en une seule commande.
- Vérifier la persistance des données.
- Comprendre le flux de build et déploiement en local.

## Prérequis

Avoir suivi les exercices précédents et avoir copié `.env.example` en `.env`.

## Contexte

Le `compose.yaml` définit deux services : `app` et `db`.

## Démonstration

Démarrez l'architecture :

```bash
docker compose up -d --build
```

Vérifiez les services :

```bash
docker compose ps
```

Voir les logs :

```bash
docker compose logs -f app
```

Arrêter et supprimer (sans supprimer les volumes) :

```bash
docker compose down
```

> Attention : `docker compose down -v` supprime aussi les volumes et donc les données PostgreSQL.

## À vous de jouer

1) Démarrez la stack complète :

```bash
docker compose up -d --build
```

2) Ouvrez l'application `http://localhost:3000` et ajoutez une tâche.

3) Vérifiez la persistance :

```bash
docker compose down
docker compose up -d
# Vérifier que la tâche ajoutée est toujours présente
curl http://localhost:3000/api/tasks
```

## Vérification

- Après un `docker compose down` suivi d'un `docker compose up -d`, les données doivent persister si vous n'avez pas utilisé `-v`.

## Exercice pratique

Ajoutez une tâche via l'interface web, redémarrez la stack et vérifiez la présence des données.

## Dépannage

- Si l'application ne se connecte pas à la DB :
  - Vérifiez `.env` et les variables `POSTGRES_*`.
  - Vérifiez `docker compose logs db` pour les erreurs d'initialisation.
  - Vérifiez que le volume est monté (`docker volume ls`).

## Questions

- Que se passe-t-il si vous supprimez le volume PostgreSQL ?

## Ce que vous devez retenir

- `docker compose` facilite la gestion multi-services et les volumes assurent la persistance.

## Pour aller plus loin

- Ajouter un reverse-proxy et configurer HTTPS (avancé).

## Prochain exercice

Passez à [10-deploiement](../10-deploiement/README.md)
