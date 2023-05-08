USE [StarDeck] 
GO

CREATE PROCEDURE AddCardToDeck
	@DecksId VARCHAR(14),
    @CartasId VARCHAR(14)
AS
BEGIN
    SET NOCOUNT ON;

    -- Verificar si la carta ya existe en el mazo
    IF EXISTS (SELECT 1 FROM DECKS_CARTAS WHERE DecksId = @DecksId AND CartasId = @CartasId)
    BEGIN
        -- Si la carta ya está en el mazo, no hacemos nada
        RETURN;
    END

    -- Agregar la carta al mazo
    INSERT INTO DECKS_CARTAS (DecksId, CartasId)
    VALUES (@DecksId, @CartasId);
	END
	GO