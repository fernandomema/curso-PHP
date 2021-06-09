CREATE DATABASE tienda_informatica;
USE tienda_informatica;
CREATE TABLE fabricantes (
  codigo INT NOT NULL,
  Nombre VARCHAR(30),
  PRIMARY KEY (codigo)
);
CREATE TABLE articulos (
  codigo INT NOT NULL,
  nombre VARCHAR(100),
  precio INT,
  fabricante INT,
  FOREIGN KEY (codigo) REFERENCES fabricantes(codigo)
);