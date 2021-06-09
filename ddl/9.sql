DROP DATABASE IF EXISTS cientificos;
CREATE DATABASE cientificos;
USE cientificos;
CREATE TABLE cientificos (
  DNI VARCHAR(8) NOT NULL,
  nomApels VARCHAR(255),
  PRIMARY KEY (DNI)
);
CREATE TABLE proyectos (
  id int NOT NULL,
  nombre VARCHAR(255),
  horas INT,
  PRIMARY KEY (id)
);
CREATE TABLE asignado_a (
  cientifico VARCHAR(8) NOT NULL,
  proyecto INT NOT NULL,
  PRIMARY KEY (cientifico, proyecto),
  FOREIGN KEY (cientifico) REFERENCES cientificos(DNI),
  FOREIGN KEY (proyecto) REFERENCES proyectos(id)
);