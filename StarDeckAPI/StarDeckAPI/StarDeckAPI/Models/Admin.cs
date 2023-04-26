using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StarDeckAPI.Models;

public class Admin
{
    public string Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public List<Carta> Cartas { get; set; } = null!;
}
