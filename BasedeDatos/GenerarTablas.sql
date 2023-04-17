CREATE TABLE JUGADOR(
	idjugador int not null,
	usuario VARCHAR(20) not null,
	pass VARCHAR(20) not null,
	nombre VARCHAR(20) not null,
	apellidos VARCHAR(30) not null,
	nacionalidad VARCHAR(20) not null,
	correo VARCHAR(40) NOT NULL,
	estadodecuenta bit not null
);
CREATE TABLE CARTA(
	idcarta int not null,
	energia int not null,
	raza VARCHAR(20) not null,
	costo int not null,
	nombrecarta VARCHAR(40) not null,
	tipo VARCHAR(20) not null,
	disponibilidad bit not null,
);

CREATE TABLE CARTA_JUGADOR(
	idcarta int not null,
	idjugador int not null,
	cantidad int not null
);

ALTER TABLE JUGADOR
ADD PRIMARY KEY(idjugador);

ALTER TABLE CARTA
ADD PRIMARY KEY(idcarta);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (idcarta) REFERENCES CARTA(idcarta);

ALTER TABLE CARTA_JUGADOR
ADD FOREIGN KEY (idjugador) REFERENCES JUGADOR(idjugador);




