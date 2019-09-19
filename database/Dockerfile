FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD password

ENV MYSQL_DATABASE banner_images

COPY schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3306