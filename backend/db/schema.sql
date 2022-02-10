Drop DATABASE IF EXISTS resources;

CREATE DATABASE resources;

\c resources;

DROP TABLE IF EXISTS resource_data;
CREATE TABLE resource_data(
    id serial PRIMARY KEY,
    name varchar(100),
    link varchar(500),
    docs varchar(500),
    likes integer,
    dislikes integer

);

\i db/seed.sql
