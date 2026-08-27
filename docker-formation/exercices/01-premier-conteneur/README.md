# Exercice 01 — Premier conteneur

## Objectif

Découvrir Docker, les images et les conteneurs.

## Prérequis

- Avoir Docker installé localement ou utiliser GitHub Codespaces (conteneur de développement).
- Avoir accès à un terminal.

## Contexte

Nous allons exécuter des images publiques et observer le comportement des conteneurs.

## Démonstration

Vérifiez la version de Docker :

```bash
docker --version
```

Exécutez l'image `hello-world` pour voir ce qu'un conteneur fait :

```bash
docker run hello-world
```

Expliquez que ce conteneur s'exécute puis se termine immédiatement (il n'y a pas de processus qui reste en avant-plan).

Affichez les conteneurs en cours d'exécution :

```bash
docker ps
```

Affichez tous les conteneurs (y compris ceux arrêtés) :

```bash
docker ps -a
```

## À vous de jouer

1) Téléchargez l'image `nginx` :

```bash
docker pull nginx:alpine
```

2) Lancez un conteneur `nginx` :

```bash
docker run --name mon-nginx -d -p 8080:80 nginx:alpine
```

3) Vérifiez qu'il tourne :

```bash
docker ps
```

4) Ouvrez `http://localhost:8080` dans votre navigateur (ou utilisez l'interface Codespaces pour exposer le port).

5) Arrêtez le conteneur :

```bash
docker stop mon-nginx
```

6) Supprimez le conteneur :

```bash
docker rm mon-nginx
```

## Vérification

- `docker ps -a` doit montrer le conteneur supprimé comme absent.

## Exercice pratique

Créez et supprimez un conteneur `nginx` supplémentaire avec le nom `web-test`.

```bash
# Démarrer
docker run --name web-test -d -p 8081:80 nginx:alpine
# Vérifier
docker ps
# Arrêter
docker stop web-test
# Supprimer
docker rm web-test
```

## Questions

- Pourquoi `hello-world` se termine immédiatement ?
- Quelle est la différence entre une image et un conteneur ?

## Erreurs fréquentes

- Port déjà utilisé : changer le port hôte `-p 8080:80` vers un port libre.
- Conteneur avec le même nom existe : supprimer ou utiliser un autre nom.

## Ce que vous devez retenir

- `docker run` crée et démarre un conteneur à partir d'une image.
- `docker ps` montre les conteneurs actifs, `docker ps -a` montre tout.

## Pour aller plus loin

- Consultez `docker logs <container>` pour voir la sortie d'un conteneur.

## Prochain exercice

Passez à [02-images-et-conteneurs](../02-images-et-conteneurs/README.md)
