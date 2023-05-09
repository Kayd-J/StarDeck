use StarDeck;

/*Script de populacion de tablas*/
INSERT INTO PAISES(Id,pais) VALUES (1,'Estados Unidos');
INSERT INTO PAISES(Id,pais) VALUES (506,'Costa Rica');
INSERT INTO PAISES(Id,pais) VALUES (52,'México');

INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (1, 'adm1','apellido1','adm1@stardeck.com','12345');
INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (2, 'adm2','apellido2','adm2@stardeck.com','12345');
INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (3, 'adm3','apellido3','adm3@stardeck.com','12345');

INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (1,30,'Elfo',50,'Morax','Raro','Dios de la tierra',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (2,40,'Humano',10,'Barbatos','Muy Raro','Señor del aire',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (3,10,'Ascendido',20,'Benet','Ultra Rara','Dios del fuego',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (4,90,'Elemental',30,'Kusalani','Normal','Dama del bosque',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (5,100,'Humano',15,'Raiden','Rara','Guerrera del trueno',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (6,-10,'Toruga',12,'Yor','Basica','Asesina de espinas',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (7,-90,'Arana',32,'Rogal','Ultra Rara','Pretoriano de terra',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (8,90,'Orco',42,'Angron','Ultra Rara','Devorador de mundos',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (9,-30,'Humano',19,'Cadian','Normal','Defensor de la humaidad',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (10,40,'Ascendido',32,'Malcador','Ultra Rara','Psiquico avanzado',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (11,-2,'Elfo',13,'Corvax','Normal','Señor de los cuervos',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (12,-22,'Elemental',18,'Azdaha','Rara','Canino rocoso',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (13,12,'Elfo',33,'Maul','Normal','Asesino oscuro',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (14,99,'Humano',98,'Cal','Rara','Monge sigiloso',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (15,-77,'Toruga',76,'Suroh','Ultra Rara','El hijo traidor',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (16,32,'Humano',98,'Yae','Basica','Guardiana del santuario',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (17,77,'Elemental',1,'Miko','Rara','Hada fugaz',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (18,3,'Elfo',37,'Eula','Ultra Rara','Leyenda de hielo',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (19,-8,'Ascendido',55,'El Emperador','Ultra Rara','Señor de la humanidad',1,'',3);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (20,-24,'Humano',2,'Lorgar','Normal','Sacerdote caido',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (21,42,'Elemental',35,'Dunyarzad','Ultra Rara','Señora de los sueños',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (22,66,'Humano',34,'Shenhe','Rara','Dama del hielo',1,'',2);

INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (1,'mjc','1234','Mario','Carranza','Costa rica','mjc@strdk.com',1,'',506);
INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (2,'aco','1234','Axel','Cordero','Estados Unidos','aco@strdk.com',0,'',1);
INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (3,'roy','1234','Roy','apellido1','Mexico','roy@strdk.com',1,'',52);

INSERT INTO CARTAS_JUGADORES(JugadoresId,cartasId,Cantidad) VALUES (1,3,2);
INSERT INTO CARTAS_JUGADORES(JugadoresId,cartasId,Cantidad) VALUES (2,1,3);
INSERT INTO CARTAS_JUGADORES(JugadoresId,cartasId,Cantidad) VALUES (3,2,4);

INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,Habilidad,AdministradoresId) VALUES('P-1G2J4V5M6J7J','planet1','raro','este es un planeta raro',1,'Habilidad 1',1);
INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,Habilidad,AdministradoresId) VALUES('P-2T7DJB095JSD','planet2','basico','este es un planeta basico',1,'Habilidad 2',2);
INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,Habilidad,AdministradoresId) VALUES('P-3JD8GF0GV7L5','planet3','popular','este es un planeta popular',1,'Habilidad 3',3);

INSERT INTO DECKS(Id,Nombre,JugadoresId) VALUES('D-1H654GH54GH8','deck1','1');
INSERT INTO DECKS(Id,Nombre,JugadoresId) VALUES('D-2H654GH54GH8','deck2','2');
INSERT INTO DECKS(Id,Nombre,JugadoresId) VALUES('D-3H654GH54GH8','deck3','3');

INSERT INTO DECKS_CARTAS(DecksId,CartasId) VALUES('D-1H654GH54GH8','1');
INSERT INTO DECKS_CARTAS(DecksId,CartasId) VALUES('D-2H654GH54GH8','2');
INSERT INTO DECKS_CARTAS(DecksId,CartasId) VALUES('D-3H654GH54GH8','3');