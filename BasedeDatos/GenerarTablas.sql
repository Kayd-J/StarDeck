CREATE TABLE AUTH(
	Usuario VARCHAR(30) not null,
	Password VARCHAR(30) not null
);

CREATE TABLE LOGIN(
	Status VARCHAR(10) not null
);

CREATE TABLE JUGADORES(
	Id VARCHAR(14) not null,
	Usuario VARCHAR(20),
	Pass VARCHAR(20),
	Nombre VARCHAR(20),
	Apellidos VARCHAR(30),
	Nacionalidad VARCHAR(20),
	Correo VARCHAR(40),
	Estadodecuenta bit,
	Avatar VARCHAR(1000),
	paisesId int not null
);

CREATE TABLE CARTAS(
	Id VARCHAR(14) not null,
	Energia int,
	Raza VARCHAR(20),
	Costo int,
	Nombre VARCHAR(40),
	Tipo VARCHAR(20),
	Descripcion VARCHAR(1000),
	Disponibilidad bit,
	Imagen VARCHAR(1000),
	AdministradoresId int not null
);

CREATE TABLE ADMINISTRADORES(
	Id int not null,
	Nombre VARCHAR(20),
	Apellido VARCHAR(30),
	Correo VARCHAR(40),
	Pass VARCHAR(20)
);

CREATE TABLE PLANETAS(
	Id VARCHAR(14) not null,
	Nombre VARCHAR(20),
	Tipo VARCHAR(30),
	Descripcion VARCHAR(40),
	Estado bit,
	Habilidad VARCHAR(40),
	AdministradoresId int not null
);

CREATE TABLE DECKS(
	Id VARCHAR(14) not null,
	Nombre VARCHAR(20),
	JugadoresId VARCHAR(14) not null
);

CREATE TABLE PAISES(
	Id int not null,
	pais VARCHAR(30) not null
);

CREATE TABLE CARTAS_JUGADORES(
	JugadoresId VARCHAR(14) not null,
	cartasId VARCHAR(14) not null,
	Cantidad int
);


CREATE TABLE DECKS_CARTAS(
	DecksId VARCHAR(14) not null,
	CartasId VARCHAR(14) not null
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

ALTER TABLE DECKS
ADD PRIMARY KEY(Id);

ALTER TABLE PLANETAS
ADD PRIMARY KEY(Id);

ALTER TABLE DECKS_CARTAS
ADD PRIMARY KEY(DecksId, CartasId);


/*Se agregan las llaves foraneas de cada tabla*/
ALTER TABLE JUGADORES
ADD FOREIGN KEY (paisesId) REFERENCES PAISES(Id);

ALTER TABLE CARTAS
ADD FOREIGN KEY (AdministradoresId) REFERENCES ADMINISTRADORES(Id);

ALTER TABLE CARTAS_JUGADORES
ADD FOREIGN KEY (cartasId) REFERENCES CARTAS(Id);

ALTER TABLE CARTAS_JUGADORES
ADD FOREIGN KEY (JugadoresId) REFERENCES JUGADORES(Id);

ALTER TABLE DECKS
ADD FOREIGN KEY (JugadoresId) REFERENCES JUGADORES(Id);

ALTER TABLE PLANETAS
ADD FOREIGN KEY (AdministradoresId) REFERENCES ADMINISTRADORES(Id);

ALTER TABLE DECKS_CARTAS
ADD FOREIGN KEY (CartasId) REFERENCES CARTAS(Id);

ALTER TABLE DECKS_CARTAS
ADD FOREIGN KEY (DecksId) REFERENCES DECKS(Id);