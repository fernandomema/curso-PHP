DROP DATABASE IF EXISTS peliculas;
CREATE DATABASE peliculas;
USE peliculas;
CREATE table peliculas (
    codigo INT NOT NULL,
    nombre varchar(100),
    clasificacionEdad int,
    PRIMARY KEY (codigo)
);
CREATE table salas (
    codigo INT NOT NULL,
    nombre varchar(100),
    pelicula int,
    PRIMARY KEY (codigo),
    FOREIGN KEY (pelicula) REFERENCES peliculas(codigo)
);