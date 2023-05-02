use StarDeck;

/*Script de populacion de tablas*/
INSERT INTO PAISES(Id,pais) VALUES (1,'Estados Unidos');
INSERT INTO PAISES(Id,pais) VALUES (506,'Costa Rica');
INSERT INTO PAISES(Id,pais) VALUES (52,'México');

INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (1, 'adm1','apellido1','adm1@stardeck.com','12345');
INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (2, 'adm2','apellido2','adm2@stardeck.com','12345');
INSERT INTO ADMINISTRADORES(Id,Nombre,Apellido,Correo,Pass) VALUES (3, 'adm3','apellido3','adm3@stardeck.com','12345');

INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (1,500,'rara',50,'carta1','tierra','carta de tierra',1,'',1);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (2,500,'comun',50,'carta2','agua','carta de agua',1,'',2);
INSERT INTO CARTAS (Id,Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId) VALUES (3,500,'normal',50,'carta3','fuego','carta de fuego',1,'',3);

INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (1,'mjc','1234','Mario','Carranza','Costa rica','mjc@strdk.com',1,'',506);
INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (2,'aco','1234','Axel','Cordero','Estados Unidos','aco@strdk.com',0,'',1);
INSERT INTO JUGADORES (Id,Usuario,Pass,Nombre,Apellidos,Nacionalidad,Correo,Estadodecuenta,Avatar,paisesId) VALUES (3,'roy','1234','Roy','apellido1','Mexico','roy@strdk.com',1,'',52);

INSERT INTO CARTA_JUGADOR(JugadoresId,cartasId) VALUES (1,3);
INSERT INTO CARTA_JUGADOR(JugadoresId,cartasId) VALUES (2,1);
INSERT INTO CARTA_JUGADOR(JugadoresId,cartasId) VALUES (3,2);

INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,AdministradoresId) VALUES('P-1G2J4V5M6J7J','planet1','raro','este es un planeta raro',1,1);
INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,AdministradoresId) VALUES('P-2T7DJB095JSD','planet2','basico','este es un planeta basico',1,2);
INSERT INTO PLANETAS(Id, Nombre,Tipo,Descripcion,Estado,AdministradoresId) VALUES('P-3JD8GF0GV7L5','planet3','popular','este es un planeta popular',1,3);

INSERT INTO DECK(Id,Nombre,JugadoresId) VALUES('D-1H654GH54GH8','deck1','1');
INSERT INTO DECK(Id,Nombre,JugadoresId) VALUES('D-2H654GH54GH8','deck2','2');
INSERT INTO DECK(Id,Nombre,JugadoresId) VALUES('D-3H654GH54GH8','deck3','3');
