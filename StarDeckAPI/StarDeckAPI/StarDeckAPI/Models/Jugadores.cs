using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Jugadores
{
    public string Id { get; set; } = null!;

    public string? Usuario { get; set; }

    public string? Pass { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public string? Nacionalidad { get; set; }

    public string? Correo { get; set; }

    public bool? Estadodecuenta { get; set; }

    public string? Avatar { get; set; }

    public int PaisesId { get; set; }

    //public virtual ICollection<Decks> Decks { get; set; } = new List<Decks>();

    //public virtual Paises Paises { get; set; } = null!;
}
