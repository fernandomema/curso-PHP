DROP DATABASE IF EXISTS empleados;
CREATE DATABASE empleados;
USE empleados;
create table departamentos (
    codigo int not null,
    nombre varchar(100),
    presupuesto int,
    PRIMARY KEY (codigo)
    
);
CREATE table empleados (
    DNI varchar(8) NOT NULL,
    nombre varchar(100),
    apellidos varchar(255),
    departamento int,
    PRIMARY KEY (DNI),
    FOREIGN KEY (departamento) REFERENCES departamentos(codigo)
);