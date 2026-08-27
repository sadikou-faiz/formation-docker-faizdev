# Exercice 05 — Les volumes

## Objectif

Comprendre la persistance des données via les volumes Docker.

## Prérequis

Avoir réalisé les exercices précédents.

## Contexte

Les volumes permettent de stocker des données en dehors du cycle de vie d'un conteneur.

## Démonstration

Créer un volume :

```bash
docker volume create data-volume
```

Lister les volumes :

```bash
docker volume ls
```

Inspecter un volume :

```bash
docker volume inspect data-volume
```

Monter un volume sur un conteneur :

```bash
docker run -d --name with-volume -v data-volume:/data busybox tail -f /dev/null
```

Écrire des données dans le volume (depuis le conteneur) :

```bash
docker exec -it with-volume sh -c "echo hello > /data/hello.txt"
```

Supprimer le conteneur, recréer et vérifier que les données persistent :

```bash
docker rm -f with-volume
docker run --rm -it -v data-volume:/data busybox cat /data/hello.txt
```

## À vous de jouer

1) Créez le volume `todo-data` :

```bash
docker volume create todo-data
```

2) Lancez un conteneur qui monte le volume :

```bash
docker run -d --name data-test -v todo-data:/data busybox tail -f /dev/null
```

3) Écrivez un fichier :

```bash
docker exec -it data-test sh -c "echo 'tache1' > /data/todo.txt"
```

4) Supprimez puis relancez un conteneur pour vérifier la persistance :

```bash
docker rm -f data-test
docker run --rm -it -v todo-data:/data busybox cat /data/todo.txt
```

## Vérification

- Le contenu écrit doit être affiché après recréation du conteneur.

## Erreurs fréquentes

- Confondre `-v host_path:container_path` et les volumes gérés par Docker `-v volume_name:container_path`.

## Ce que vous devez retenir

- Les volumes vivent indépendamment des conteneurs.

## Pour aller plus loin

- Utiliser des bind mounts pour monter des dossiers locaux pendant le développement.

## Prochain exercice

Passez à [06-docker-compose](../06-docker-compose/README.md)
