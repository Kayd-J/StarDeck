
CREATE TABLE JUGADORES(
	Id int not null,
	Usuario VARCHAR(20) not null,
	Pass VARCHAR(20) not null,
	Nombre VARCHAR(20) not null,
	Apellidos VARCHAR(30) not null,
	Nacionalidad VARCHAR(20) not null,
	Correo VARCHAR(40) NOT NULL,
	Estadodecuenta bit not null,
	Avatar VARCHAR(1000) not null,
	paisesId int not null
);
CREATE TABLE CARTAS(
	Id int not null,
	Energia int not null,
	Raza VARCHAR(20) not null,
	Costo int not null,
	Nombre VARCHAR(40) not null,
	Tipo VARCHAR(20) not null,
	Descripcion VARCHAR(1000) not null,
	Disponibilidad bit not null,
	Imagen VARCHAR(1000) not null,
	AdministradoresId int not null
);
CREATE TABLE ADMINISTRADORES(
	Id int not null,
	Nombre VARCHAR(20) not null,
	Apellido VARCHAR(30) not null,
	Correo VARCHAR(40) not null,
	Pass VARCHAR(20) not null
);

CREATE TABLE PLANETAS(
	Id VARCHAR(14) not null,
	Nombre VARCHAR(20) not null,
	Tipo VARCHAR(30) not null,
	Descripcion VARCHAR(40) not null,
	Estado int not null,
	AdministradoresId int not null
);

CREATE TABLE DECK(
	Id VARCHAR(14) not null,
	Nombre VARCHAR(20) not null,
	JugadoresId VARCHAR(14) not null
);

CREATE TABLE CARTA_JUGADOR(
	JugadoresId int not null,
	cartasId int not null
);

CREATE TABLE PAISES(
	Id int not null,
	pais VARCHAR(30) not null
);

/*Se agregan las llaves primarias de cada tabla*/
ALTER TABLE JUGADORES
ADD PRIMARY KEY(Id);

ALTER TABLE CARTAS
ADD PRIMARY KEY(Id);

ALTER TABLE ADMINISTRADORES
ADD PRIMARY KEY(Id);

ALTER TABLE PAISES
ADD PRIMARY KEY(Id);

ALTER TABLE DECK
ADD PRIMARY KEY(Id);

ALTER TABLE PLANETAS
ADD PRIMARY KEY(Id);


/*Se agregan las llaves foraneas de cada tabla*/
ALTER TABLE JUGADORES
ADD FOREIGN KEY (paisesId) REFERENCES PAISES(Id);

ALTER TABLE CARTAS
ADD FOREIGN KEY (AdministradoresId) REFERENCES ADMINISTRADORES(Id);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (cartasId) REFERENCES CARTAS(Id);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (JugadoresId) REFERENCES JUGADORES(Id);

ALTER TABLE DECK
ADD FOREIGN KEY (JugadoresId) REFERENCES JUGADORES(ID);

ALTER TABLE PLANETAS
ADD FOREIGN KEY (AdministradoresId) REFERENCES ADMINISTRADORES(Id);



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