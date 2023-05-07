using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Administradores
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Correo { get; set; }

    public string? Pass { get; set; }

    //public virtual ICollection<Cartas> Carta { get; set; } = new List<Cartas>();

    //public virtual ICollection<Planetas> Planeta { get; set; } = new List<Planetas>();
}
