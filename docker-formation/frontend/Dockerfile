# Étape 1 : build de l'application React avec Vite
FROM node:20-alpine AS build
WORKDIR /usr/src/app

# Copie package.json en premier pour profiter du cache Docker
COPY package*.json ./
RUN npm install

# Copie le reste du code source et génère le build de production
COPY . .
RUN npm run build

# Étape 2 : sert les fichiers statiques générés avec Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
