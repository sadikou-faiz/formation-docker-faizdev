# Exercice 06 — Docker Compose

## Objectif

Découvrir Docker Compose et comparer `docker run` avec `docker compose`.

## Prérequis

Avoir réalisé les exercices précédents.

## Contexte

Compose permet de définir plusieurs services dans un fichier YAML et de les démarrer ensemble.

## Démonstration

Exemple de commande :

```bash
docker compose up -d
```

Afficher les services :

```bash
docker compose ps
```

Afficher les logs :

```bash
docker compose logs -f
```

Arrêter et supprimer les ressources :

```bash
docker compose down
```

## À vous de jouer

1) Depuis la racine du repository, démarrez le compose :

```bash
docker compose up -d --build
```

2) Vérifiez les services :

```bash
docker compose ps
```

3) Voyez les logs de l'application :

```bash
docker compose logs -f app
```

4) Arrêtez proprement :

```bash
docker compose down
```

> Attention : `docker compose down -v` supprime aussi les volumes. Expliquer l'impact avant d'exécuter.

## Vérification

- L'application `app` et le service `db` doivent apparaître.

## Exercice pratique

Relancer avec reconstruction et vérifier l'accès HTTP sur le port mappé (3000).

## Erreurs fréquentes

- Variables d'environnement absentes : copier `.env.example` en `.env` et adapter.

## Ce que vous devez retenir

- `docker compose` simplifie la gestion multi-services.

## Pour aller plus loin

- Ajouter un service `redis` et voir la communication entre containers.

## Prochain exercice

Passez à [07-application-node](../07-application-node/README.md)
