DROP DATABASE IF EXISTS directores;
CREATE DATABASE directores;
USE directores;
create table despachos (
    numero int not null,
    capacidad int,
    PRIMARY KEY (numero)
);

create table directores (
    DNI varchar(8) not null,
    nomApels varchar(255),
    DNIJefe varchar(8),
    despacho int,
    PRIMARY KEY (DNI),
    FOREIGN KEY (DNIJefe) REFERENCES directores(DNI),
    FOREIGN KEY (despacho) REFERENCES despachos(numero)
);