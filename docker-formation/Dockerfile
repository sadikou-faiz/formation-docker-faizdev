# Utilisé pour dockeriser l'application Node.js
FROM node:18-alpine

# Crée le dossier de l'application
WORKDIR /usr/src/app

# Copie package.json en premier pour profiter du cache
COPY app/package*.json ./

# Installe les dépendances en production
RUN npm install --production

# Copie le reste de l'application
COPY app/ .

# Expose le port configuré
EXPOSE 3000

# Démarre l'application
CMD ["node", "server.js"]
