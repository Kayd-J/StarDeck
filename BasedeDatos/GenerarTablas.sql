CREATE TABLE JUGADOR(
	idusuario int not null,
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


