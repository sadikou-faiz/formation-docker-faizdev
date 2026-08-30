# Exercice 03 - Docker Compose : frontend + backend

1) Démarrez la stack :

```bash
docker compose up -d --build
```

2) Vérifiez l'état des services :

```bash
docker compose ps
```

3) Consultez les logs du backend :

```bash
docker compose logs -f backend
```

4) Consultez les logs du front :

```bash
docker compose logs -f frontend
```

5) Arrêtez uniquement le backend et observez l'erreur côté frontend :

```bash
docker compose stop backend
```

6) Redémarrez-le :

```bash
docker compose start backend
```

7) Nettoyez :

```bash
docker compose down
```
