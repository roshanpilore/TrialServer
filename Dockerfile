FROM 172.18.5.63:5000/node
WORKDIR /src
COPY . .
RUN npm i express
EXPOSE 4000
CMD node server.js
