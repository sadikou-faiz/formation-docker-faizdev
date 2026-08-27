# Exercice 01 — Découvrir Docker et lancer son premier conteneur

## Objectif

Dans ce premier exercice, nous allons découvrir le fonctionnement de base de Docker.

Nous allons apprendre à :

* vérifier l'installation de Docker ;
* télécharger une image Docker ;
* créer un conteneur ;
* démarrer un conteneur ;
* afficher les conteneurs ;
* arrêter un conteneur ;
* supprimer un conteneur.

À la fin de cet exercice, vous aurez lancé votre premier conteneur Docker.

---

## 1. Vérifier Docker

Avant de commencer, vérifiez que Docker est disponible.

Exécutez :

```bash
docker --version
```

Vous devriez obtenir une réponse similaire à :

```text
Docker version 28.x.x
```

La version peut être différente selon votre environnement.

---

## 2. Lancer notre premier conteneur

Nous allons utiliser l'image `hello-world`.

Exécutez :

```bash
docker run hello-world
```

Docker va rechercher l'image `hello-world`.

Si elle n'existe pas encore sur votre machine, Docker va la télécharger automatiquement.

Ensuite, Docker va créer un conteneur à partir de cette image et l'exécuter.

Vous devriez obtenir un message indiquant que votre installation Docker fonctionne correctement.

---

## 3. Afficher les conteneurs en cours d'exécution

Exécutez :

```bash
docker ps
```

Cette commande affiche les conteneurs actuellement en cours d'exécution.

Vous remarquerez probablement que le conteneur `hello-world` n'apparaît pas.

C'est normal.

Le programme `hello-world` affiche son message puis se termine immédiatement.

---

## 4. Afficher tous les conteneurs

Pour afficher également les conteneurs qui sont arrêtés, utilisez :

```bash
docker ps -a
```

Vous devriez maintenant voir votre conteneur `hello-world`.

Observez les différentes colonnes affichées.

En particulier :

* `CONTAINER ID`
* `IMAGE`
* `COMMAND`
* `STATUS`
* `NAMES`

---

## 5. Comprendre la différence entre une image et un conteneur

Il est important de comprendre cette différence avant de continuer.

Une image Docker est un modèle permettant de créer un conteneur.

Un conteneur est une instance créée à partir d'une image.

On peut représenter cela ainsi :

```text
Image Docker
     |
     | docker run
     v
Conteneur
```

Une même image peut permettre de créer plusieurs conteneurs.

Par exemple :

```text
          Image nginx
              |
       +------+------+
       |             |
       v             v
 Conteneur 1    Conteneur 2
```

---

## 6. Lancer un conteneur Ubuntu

Nous allons maintenant lancer un véritable environnement Linux.

Exécutez :

```bash
docker run -it ubuntu bash
```

Docker va télécharger l'image Ubuntu si elle n'est pas déjà disponible.

Vous devriez maintenant vous retrouver dans un terminal Ubuntu.

Exécutez :

```bash
ls
```

Puis :

```bash
cat /etc/os-release
```

Vous pouvez également exécuter :

```bash
hostname
```

Vous êtes maintenant à l'intérieur du conteneur.

---

## 7. Quitter le conteneur

Pour quitter le terminal du conteneur, exécutez :

```bash
exit
```

Vous revenez alors dans votre terminal habituel.

---

## 8. Vérifier le conteneur

Exécutez :

```bash
docker ps -a
```

Vous devriez retrouver le conteneur Ubuntu.

Son état devrait être similaire à :

```text
Exited
```

Cela signifie que le conteneur existe toujours, mais qu'il n'est plus en cours d'exécution.

---

## 9. Supprimer le conteneur

Commencez par récupérer son identifiant :

```bash
docker ps -a
```

Puis utilisez :

```bash
docker rm <CONTAINER_ID>
```

Remplacez `<CONTAINER_ID>` par l'identifiant du conteneur Ubuntu.

Vous pouvez également utiliser son nom :

```bash
docker rm <CONTAINER_NAME>
```

Vérifiez ensuite :

```bash
docker ps -a
```

Le conteneur Ubuntu doit avoir disparu.

---

# Exercice pratique

Maintenant, essayez de refaire les opérations suivantes sans regarder les commandes précédentes.

Vous devez :

1. Télécharger l'image `nginx`.
2. Créer un conteneur à partir de cette image.
3. Afficher les conteneurs en cours d'exécution.
4. Arrêter le conteneur.
5. Afficher tous les conteneurs.
6. Supprimer le conteneur.

Les commandes suivantes pourront vous aider :

```bash
docker pull
docker run
docker ps
docker stop
docker rm
```

---

# Questions

Avant de passer à l'exercice suivant, essayez de répondre aux questions suivantes.

### Question 1

Quelle est la différence entre une image Docker et un conteneur Docker ?

### Question 2

Quelle est la différence entre :

```bash
docker ps
```

et :

```bash
docker ps -a
```

### Question 3

Que se passe-t-il lorsque vous exécutez :

```bash
docker run hello-world
```

### Question 4

Pourquoi le conteneur `hello-world` est-il arrêté après son exécution ?

---

# Ce que vous devez retenir

Les commandes principales découvertes dans cet exercice sont :

```bash
docker --version
docker run
docker ps
docker ps -a
docker pull
docker stop
docker rm
```

Le fonctionnement général est :

```text
Image
  |
  | docker run
  v
Conteneur
  |
  | docker stop
  v
Conteneur arrêté
  |
  | docker rm
  v
Conteneur supprimé
```

---

# Pour aller plus loin

Essayez maintenant de lancer plusieurs conteneurs Ubuntu :

```bash
docker run -it ubuntu bash
```

Puis quittez avec :

```bash
exit
```

Répétez l'opération plusieurs fois.

Utilisez ensuite :

```bash
docker ps -a
```

Observez les différents conteneurs créés.

---

# Prochain exercice

Dans le prochain exercice, nous allons approfondir la notion d'image Docker et apprendre à créer notre propre image à l'aide d'un `Dockerfile`.
