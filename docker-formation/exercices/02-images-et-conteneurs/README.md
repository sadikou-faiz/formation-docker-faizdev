# Exercice 02 — Images et conteneurs

## Objectif

Comprendre la différence entre image et conteneur et manipuler plusieurs conteneurs issus d'une même image.

## Prérequis

Avoir réalisé l'exercice 01 ou savoir lancer un conteneur.

## Contexte

Une image est un modèle immuable ; un conteneur est une instance en cours d'exécution.

## Démonstration

Listez les images locales :

```bash
docker images
# ou
docker image ls
```

Listez les conteneurs en cours et tous les conteneurs :

```bash
docker ps
docker ps -a
```

Inspectez un conteneur :

```bash
docker inspect <container_id_or_name>
```

## À vous de jouer

1) Lancez deux conteneurs `nginx` basés sur la même image :

```bash
docker run --name web1 -d -p 8082:80 nginx:alpine
docker run --name web2 -d -p 8083:80 nginx:alpine
```

2) Observez `docker ps` pour voir les deux conteneurs.

3) Utilisez `docker inspect` pour comparer les détails (network, image id) :

```bash
docker inspect web1
docker inspect web2
```

4) Arrêtez et supprimez les deux conteneurs :

```bash
docker stop web1 web2
docker rm web1 web2
```

## Vérification

- `docker images` doit montrer l'image `nginx` téléchargée.
- `docker ps -a` doit ne plus contenir `web1` et `web2` après suppression.

## Exercice pratique

Démarrez deux conteneurs `busybox` qui exécutent une commande simple et s'arrêtent immédiatement :

```bash
# Téléchargez l'image

docker pull busybox

# Exécutez une commande qui s'arrête

docker run --name bb1 busybox echo "hello"
docker run --name bb2 busybox echo "world"

# Voir les conteneurs arrêtés
docker ps -a
# Supprimer
docker rm bb1 bb2
```

## Questions

- Pourquoi pouvons-nous créer plusieurs conteneurs à partir de la même image ?
- Qu'est-ce qui est persistant entre plusieurs conteneurs issus d'une même image ?

## Erreurs fréquentes

- Conflit de ports lors du démarrage de plusieurs services.

## Ce que vous devez retenir

- Image = modèle immuable ; conteneur = instance.

## Pour aller plus loin

- Lisez `docker history <image>` pour voir les couches.

## Prochain exercice

Passez à [03-creer-une-image](../03-creer-une-image/README.md)
