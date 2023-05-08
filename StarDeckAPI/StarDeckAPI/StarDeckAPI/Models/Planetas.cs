using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Planetas
{
    public string Id { get; set; } = null!;

    public string? Nombre { get; set; }

    public string? Tipo { get; set; }

    public string? Descripcion { get; set; }

    public int? Estado { get; set; }

    public string Habilidad { get; set; }

    public int AdministradoresId { get; set; }

    //public virtual Administradores Administradores { get; set; } = null!;
}
