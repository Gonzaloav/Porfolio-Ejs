FROM node:16

EXPOSE 3000

WORKDIR /usr/src/app/
COPY . .

RUN npm install --omit=dev
RUN rm .gitignore Retrato documents portfolio.db package.json package-lock.json README.md -rf

ENTRYPOINT [ "npm", "start" ]