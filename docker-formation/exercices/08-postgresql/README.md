# Exercice 08 — Ajouter PostgreSQL

## Objectif

Ajouter PostgreSQL au projet et connecter l'application Node.js à la base de données.

## Prérequis

Avoir réalisé l'exercice 07 et avoir Docker Compose installé.

## Contexte

Nous allons utiliser `docker compose` pour lancer `app` et `db` ensemble.

## Démonstration

Copiez `.env.example` en `.env` à la racine et adaptez si nécessaire :

```bash
cp .env.example .env
```

Démarrer Compose :

```bash
docker compose up -d --build
```

Explication : l'application doit se connecter à la base en utilisant le nom de service `db` comme hôte.

## À vous de jouer

1) Copiez le fichier d'exemple :

```bash
cp .env.example .env
```

2) Démarrez les services :

```bash
docker compose up -d --build
```

3) Vérifiez que `db` est prêt (voir les logs) :

```bash
docker compose logs -f db
```

4) Vérifiez l'API :

```bash
curl http://localhost:3000/api/tasks
```

## Vérification

- La commande `docker compose ps` doit afficher `app` et `db`.
- Les logs de `app` ne doivent pas contenir d'erreur de connexion à la base.

## Exercice pratique

Créez une table `tasks` dans PostgreSQL et ajoutez quelques tâches via `psql` :

```bash
# Ouvrir un shell dans le conteneur db
docker compose exec db psql -U $POSTGRES_USER -d $POSTGRES_DB

# Dans psql
CREATE TABLE tasks (id SERIAL PRIMARY KEY, title TEXT NOT NULL);
INSERT INTO tasks (title) VALUES ('Première tâche');
SELECT * FROM tasks;
\q
```

## Questions

- Pourquoi n'utilisons-nous pas `localhost` dans la configuration de connexion ?

## Erreurs fréquentes

- Oublier de définir les variables d'environnement dans `.env`.

## Ce que vous devez retenir

- Les conteneurs d'un même compose peuvent se joindre par nom de service.

## Pour aller plus loin

- Ajouter une migration automatique au démarrage de l'application.

## Prochain exercice

Passez à [09-application-complete](../09-application-complete/README.md)
