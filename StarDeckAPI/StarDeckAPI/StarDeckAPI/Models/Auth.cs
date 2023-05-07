using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Auth
{
    public string Usuario { get; set; } = null!;

    public string Password { get; set; } = null!;
}
