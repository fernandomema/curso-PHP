DROP DATABASE IF EXISTS almacenes;
CREATE DATABASE almacenes;
USE almacenes;
CREATE table almacenes (
    codigo INT NOT NULL,
    lugar varchar(100),
    capacidad int,
    PRIMARY KEY (codigo)
);

CREATE TABLE articulos (
  numReferencia INT NOT NULL,
  contenido VARCHAR(100),
  valor INT,
  almacen INT,
  FOREIGN KEY (valor) REFERENCES almacenes(codigo)
);