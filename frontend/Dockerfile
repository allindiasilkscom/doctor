From node:22
WORkDIR /app
COPY package*.json /app
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx","serve","-s","dist"]