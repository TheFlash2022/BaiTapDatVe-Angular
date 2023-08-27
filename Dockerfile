FROM node:18-alpine
WORKDIR /Users/leanh/Public/app
COPY . .
RUN apt-update
RUN npm install
CMD ["ng","serve"]
EXPOSE 7080
