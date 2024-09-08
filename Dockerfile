# Utiliser une image Node.js de base
FROM node:16-alpine

# Créer le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json ./
RUN npm install

# Copier tout le reste
COPY . .

# Compiler TypeScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "start:prod"]
