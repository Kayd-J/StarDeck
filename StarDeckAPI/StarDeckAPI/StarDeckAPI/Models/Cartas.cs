using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Cartas
{
    public string Id { get; set; } = null!;

    public int Energia { get; set; }

    public string Raza { get; set; }

    public int Costo { get; set; }

    public string Nombre { get; set; }

    public string Tipo { get; set; }

    public string Descripcion { get; set; }

    public bool Disponibilidad { get; set; }

    public string Imagen { get; set; }

    public int AdministradoresId { get; set; }

    //public virtual Administradores Administradores { get; set; } = null!;

    //public virtual ICollection<Decks> Decks { get; set; } = new List<Decks>();
}
