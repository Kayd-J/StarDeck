
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
