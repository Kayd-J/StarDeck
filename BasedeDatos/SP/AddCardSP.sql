USE [StarDeck] 
GO

CREATE PROCEDURE AddCard
    @Id VARCHAR(14),
	@Energia int,
	@Raza VARCHAR(20),
	@Costo int,
	@Nombre VARCHAR(40),
	@Tipo VARCHAR(20),
	@Descripcion VARCHAR(1000),
	@Disponibilidad bit,
	@Imagen VARCHAR(1000),
	@AdministradoresId int 
AS
BEGIN
  INSERT INTO CARTAS (Id, Energia,Raza,Costo,Nombre,Tipo,Descripcion,Disponibilidad,Imagen,AdministradoresId)
  VALUES (@Id, @Energia, @Raza, @Costo, @Nombre,@Tipo,@Descripcion,@Disponibilidad,@Imagen,@AdministradoresId);
END

GO