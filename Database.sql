 /* CREATE TABLE */
use dualab;
CREATE TABLE IF NOT EXISTS Dualab(
Empresa VARCHAR( 100 ),
Dirección VARCHAR( 200 ),
Teléfono VARCHAR(50),
Correoelectrónico VARCHAR( 100 ),
Páginaweb VARCHAR( 100 ),
Encargado VARCHAR( 100 ),
Puesto VARCHAR( 100 )
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'Rocman Producciones','Calle Sao Paulo S/N , Ed.IMEF, of.138, 35008, Las Palmas','619 60 36 03','info@rocmanproducciones.com','N/A','Manuel de los Reyes','Dueño'
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'Cargolíder Canarias','C. Sao Paulo, 6, Of. 132, 35008 Las Palmas de Gran Canaria, Las Palmas','652 84 44 40','comercial@cargolidercanarias.com','https://cargolidercanarias.com/','Ángel  Fernandez','Director'
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'Picanarias','C. Sao Paulo, 6, Oficina 127, 35008 Las Palmas de Gran Canaria, Las Palmas','928 20 49 22','infopicanarias@gmail.com','https://picanarias.com/','Ricardo',NULL
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'TotalEnergy','Av. Rafael Cabrera, 14, 35002 Las Palmas de Gran Canaria, Las Palmas','+33 1 47 44 45 46',NULL,'https://grupocomercialconsulting.com/','Ana Inmaculada ','gerente '
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'Asociación de empresarios puerto canteras','C. López Socas, 11, 35008 Las Palmas de Gran Canaria, Las Palmas','928 46 31 88','puertocanteras@yahoo.es','https://asociacionpuertocanteras.wordpress.com/','Dori','Presidenta'
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'Cubas de Agua Las Palmas Transmer','Edificio Emprendedores, El Sebadal, C. Sao Paulo, 6, Oficina 108 - 1º planta, 35008 Las Palmas de Gran Canaria, Las Palmas','928 949 314  -  628 220 272','administracion@transmer.es','Empresa de transportes de agua en Las Palmas con Transmer',NULL,NULL
);

/* INSERT QUERY */
INSERT INTO Dualab( Empresa,Dirección,Teléfono,Correoelectrónico,Páginaweb,Encargado,Puesto )
VALUES
(
    'De Pura Raza | Productos Cárnicos Premium
','C. Sao Paulo, 6, local 8, 35008 Las Palmas de Gran Canaria, Las Palmas','662 158 938','administracion@depuraraza.es','https://www.depuraraza.es/index.html','Judit ','Dueña/administradora'
);
