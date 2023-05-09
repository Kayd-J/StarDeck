USE [StarDeck] 
GO

CREATE PROCEDURE GetDecksFromPlayer
	@JugadorId VARCHAR(14)
AS
BEGIN 
	SELECT d.*
    FROM DECKS d
    INNER JOIN JUGADORES p ON p.Id = d.JugadoresId
    WHERE p.Id = @JugadorId
END
GO