using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Administrador
{
    public int Idadmin { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public virtual ICollection<Carta> Carta { get; set; } = new List<Carta>();
}
