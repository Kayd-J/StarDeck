using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Carta
{
    public string Idcarta { get; set; }

    public int Energia { get; set; }

    public string Raza { get; set; } = null!;

    public int Costo { get; set; }

    public string Nombre { get; set; } = null!;

    public string Tipo { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public bool Disponibilidad { get; set; }

    public int Idadmin { get; set; }

    public string Imagen { get; set; } = null!;

    public virtual Administrador IdadminNavigation { get; set; } = null!;
}
