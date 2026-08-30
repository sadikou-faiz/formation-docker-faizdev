# Exercice 01 - Premier conteneur

## Objectif

Découvrir Docker : les images, les conteneurs, et la différence entre les deux.

## Prérequis

- Avoir Docker installé localement ou utiliser GitHub Codespaces (conteneur de développement).

## Démonstration

Vérifiez la version de Docker :

```bash
docker --version
```

Exécutez l'image `hello-world` pour voir ce qu'un conteneur fait :

```bash
docker run hello-world
```

Listez les images locales et les conteneurs :

```bash
docker images
docker ps      # conteneurs en cours d'exécution
docker ps -a   # tous les conteneurs, y compris ceux arrêtés
```

Inspectez un conteneur pour voir ses détails (réseau, image, etc.) :

```bash
docker inspect <container_id_or_name>
```

## À vous de jouer

1) Téléchargez l'image `nginx` :

```bash
docker pull nginx:alpine
```

2) Lancez deux conteneurs à partir de cette même image :

```bash
docker run --name web1 -d -p 8082:80 nginx:alpine
docker run --name web2 -d -p 8083:80 nginx:alpine
```

3) Vérifiez qu'ils tournent et comparez-les :

```bash
docker ps
docker inspect web1
docker inspect web2
```

4) Ouvrez `http://localhost:8082` et `http://localhost:8083` dans votre navigateur (ou utilisez l'interface Codespaces pour exposer les ports).

5) Arrêtez et supprimez les deux conteneurs :

```bash
docker stop web1 web2
docker rm web1 web2
```

6) Supprimez les images téléchargées :

```bash
docker rmi hello-world:latest nginx:alpine busybox:latest
```

Passez à [02-frontend-et-backend](../02-frontend-et-backend/README.md)
