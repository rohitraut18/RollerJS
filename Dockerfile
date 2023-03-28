# syntax=docker/dockerfile:1
FROM node:19-alpine

# update packages on Alpine
RUN apk update

# set default working directory in container
WORKDIR /sandbox
ENV WORKDIR=/sandbox

# copy entire repo into container
COPY . ${WORKDIR}

# install packages
RUN npm update && \
    npm install -g

EXPOSE 8080

CMD [ "npm", "test" ]