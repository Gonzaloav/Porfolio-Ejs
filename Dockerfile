FROM node:16

EXPOSE 3000

WORKDIR /usr/src/app/
COPY . .

RUN npm install --omit=dev
RUN rm .gitignore Retrato document portfolio.db README.md -rf

ENTRYPOINT [ "npm", "start" ]