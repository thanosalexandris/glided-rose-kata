FROM node:14
WORKDIR /src
RUN git clone https://github.com/thanosalexandris/glided-rose-kata .
RUN npm install
