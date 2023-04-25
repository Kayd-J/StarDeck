CREATE TABLE JUGADOR(
	idjugador int not null,
	usuario VARCHAR(20) not null,
	pass VARCHAR(20) not null,
	nombre VARCHAR(20) not null,
	apellidos VARCHAR(30) not null,
	nacionalidad VARCHAR(20) not null,
	correo VARCHAR(40) NOT NULL,
	estadodecuenta bit not null,
	avatar int not null,
	idpais int not null
);
CREATE TABLE CARTA(
	idcarta int not null,
	energia int not null,
	raza VARCHAR(20) not null,
	costo int not null,
	nombre VARCHAR(40) not null,
	tipo VARCHAR(20) not null,
	disponibilidad bit not null,
	idadmin int not null,
	imagen VARCHAR(1000) not null
);
CREATE TABLE ADMINISTRADOR(
	idadmin int not null,
	nombre VARCHAR(20) not null,
	apellido VARCHAR(30) not null,
	correo VARCHAR(40) not null,
	pass VARCHAR(20) not null
);


CREATE TABLE CARTA_JUGADOR(
	idcarta int not null,
	idjugador int not null,
	cantidad int not null
);

CREATE TABLE PAISES(
	idpais int not null,
	pais VARCHAR(30) not null
);


ALTER TABLE JUGADOR
ADD PRIMARY KEY(idjugador);

ALTER TABLE CARTA
ADD PRIMARY KEY(idcarta);

ALTER TABLE ADMINISTRADOR
ADD PRIMARY KEY(idadmin);

ALTER TABLE PAISES
ADD PRIMARY KEY(idpais)

ALTER TABLE JUGADOR
ADD FOREIGN KEY (idpais) REFERENCES PAISES(idpais);

ALTER TABLE CARTA
ADD FOREIGN KEY (idadmin) REFERENCES ADMINISTRADOR(idadmin);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (idcarta) REFERENCES CARTA(idcarta);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (idjugador) REFERENCES JUGADOR(idjugador);





