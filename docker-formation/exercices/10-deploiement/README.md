# Exercice 10 — Déploiement

## Objectif

Comprendre les étapes pour déployer l'application sur un serveur Linux avec Docker et Docker Compose.

## Prérequis

- Compétences de base en ligne de commande.
- Accès à un serveur Linux (ou VM) pour suivre les étapes.

## Contexte

Nous allons lister les étapes reproductibles pour déployer l'application.

## Démonstration

1) Sur le serveur, installer Docker (exemple pour Ubuntu) :

```bash
# Mettre à jour
sudo apt update
# Installer les prérequis
sudo apt install -y ca-certificates curl gnupg lsb-release
# Ajouter la clé Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
# Configurer le repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# Installer Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

2) Cloner le dépôt sur le serveur :

```bash
git clone <votre-repo.git> todo-app
cd todo-app
cp .env.example .env
# adapter .env si besoin
```

3) Construire et démarrer :

```bash
docker compose up -d --build
```

4) Ouvrir les ports (exemple pour UFW) :

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

5) Vérifier les services :

```bash
docker compose ps
docker compose logs -f app
```

## À vous de jouer

Suivez les étapes ci-dessus sur un serveur de test. N'exécutez pas les étapes d'ouverture de port sans comprendre l'impact.

## Vérification

- Accéder à `http://IP_DU_SERVEUR:3000` ou configurer un reverse-proxy pour exposer sur le port 80.

## Questions

- Quelle est la différence entre déployer en local et déployer sur un serveur distant ?

## Erreurs fréquentes

- Oublier de configurer les variables d'environnement sur le serveur.
- Oublier d'ouvrir les ports du firewall.

## Ce que vous devez retenir

- Les étapes sont reproductibles : installer Docker, cloner, configurer `.env`, lancer `docker compose`.

## Pour aller plus loin

- Mettre en place un reverse-proxy avec Traefik ou Nginx et automatiser le déploiement via GitHub Actions.

## Prochaines étapes pédagogiques

- CI/CD et gestion des secrets (avancé).
