DROP DATABASE IF EXISTS piezas;
CREATE DATABASE piezas;
USE piezas;
CREATE TABLE piezas (
  codigo INT NOT NULL,
  nombre VARCHAR(100),
  PRIMARY KEY (codigo)
);
CREATE TABLE proveedores (
  id CHAR(4) NOT NULL,
  nombre VARCHAR(100),
  PRIMARY KEY (id)
);
CREATE TABLE suministra (
  codigoPieza INT NOT NULL,
  idProveedor CHAR(4) NOT NULL,
  precio INT,
  PRIMARY KEY (codigoPieza, idProveedor),
  FOREIGN KEY (codigoPieza) REFERENCES piezas(codigo),
  FOREIGN KEY (idProveedor) REFERENCES proveedores(id)
);