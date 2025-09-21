FROM node:22
WORkDIR /app
COPY package*.json /app
RUN npm install
COPY  . .
EXPOSE 4200
CMD ["npm","run","server"]
