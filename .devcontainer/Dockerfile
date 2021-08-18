FROM node:14
ARG TIMEZONE
ARG NODE_ENV 

ENV NODE_ENV ${NODE_ENV}

COPY ./entrypoint.sh /usr/local/bin
RUN sed 's/\r$//g' /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /var/www/react
